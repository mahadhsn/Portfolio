#!/usr/bin/env node
// Records per-photo shot info for the logbook in src/data/photoMeta.json.
//
// For every photo in <folder> it stores the camera, lens, ISO, aperture,
// shutter speed and focal length. Photos that also have an export in
// <folder>/Edited/ get an `edit` entry too: a list of what changed versus the
// original, measured by comparing the two images (exposure, contrast,
// saturation, warmth, framing), plus the text of Edited/<name>.txt if you
// wrote one. The measured list is an estimate; the .txt is the way to say
// exactly what you did.
//
// Shot info is read from the original because editors strip EXIF. GPS and
// other tags are deliberately never read.
//
// Usage: node scripts/image-meta.mjs <meta-key> <folder>
//   e.g. node scripts/image-meta.mjs canon/bronte-4-10-26 raw/canon/bronte-4-10-26
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const META_FILE = "src/data/photoMeta.json";
const IMAGE_RE = /\.(jpe?g|png|heic|heif)$/i;
const SAMPLE_WIDTH = 320;

const [metaKey, folder] = process.argv.slice(2);
if (!metaKey || !folder) {
  console.error("Usage: node scripts/image-meta.mjs <meta-key> <folder>");
  process.exit(1);
}

const listImages = (dir) =>
  fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .filter((f) => IMAGE_RE.test(f))
        .map((f) => path.join(dir, f))
    : [];
const stem = (file) => path.basename(file, path.extname(file));

// ── Shot info ────────────────────────────────────────────────

const readExif = (files) => {
  const byFile = new Map();
  if (!files.length) return byFile;
  const out = execFileSync(
    "exiftool",
    [
      "-json",
      "-n",
      "-Make",
      "-Model",
      "-LensModel",
      "-ISO",
      "-FNumber",
      "-ExposureTime",
      "-FocalLength",
      ...files,
    ],
    { maxBuffer: 64 * 1024 * 1024 },
  );
  for (const row of JSON.parse(out)) byFile.set(row.SourceFile, row);
  return byFile;
};

const cameraName = (make, model) => {
  if (!model) return undefined;
  const m = model.replace(/\bREBEL\b/, "Rebel");
  if (/^canon/i.test(m)) return m;
  const brand = make?.toUpperCase() === "FUJIFILM" ? "Fujifilm" : make;
  return brand ? `${brand} ${m}` : m;
};

const shutter = (t) => (t < 1 ? `1/${Math.round(1 / t)}` : `${t}`);

const shotInfo = (exif) => {
  if (!exif) return {};
  const info = {
    camera: cameraName(exif.Make, exif.Model),
    lens: exif.LensModel,
    iso: exif.ISO,
    aperture: exif.FNumber ? Number(exif.FNumber.toFixed(1)) : undefined,
    shutter: exif.ExposureTime ? shutter(exif.ExposureTime) : undefined,
    focal: exif.FocalLength ? Math.round(exif.FocalLength) : undefined,
  };
  return Object.fromEntries(
    Object.entries(info).filter(([, v]) => v !== undefined),
  );
};

// ── Edit measurement ─────────────────────────────────────────

const toLinear = (c) =>
  c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

// Overall tone/colour stats on a small, auto-oriented copy of the image.
const profile = async (file) => {
  const { data } = await sharp(file)
    .rotate()
    .resize({ width: SAMPLE_WIDTH, withoutEnlargement: true })
    .removeAlpha()
    .toColourspace("srgb")
    .raw()
    .toBuffer({ resolveWithObject: true });

  const n = data.length / 3;
  let lin = 0;
  let sumY = 0;
  let sumY2 = 0;
  let chroma = 0;
  let r = 0;
  let b = 0;
  for (let i = 0; i < data.length; i += 3) {
    const R = data[i] / 255;
    const G = data[i + 1] / 255;
    const B = data[i + 2] / 255;
    const y = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    lin += 0.2126 * toLinear(R) + 0.7152 * toLinear(G) + 0.0722 * toLinear(B);
    sumY += y;
    sumY2 += y * y;
    chroma += Math.max(R, G, B) - Math.min(R, G, B);
    r += R;
    b += B;
  }
  const meanY = sumY / n;
  const meta = await sharp(file).metadata();
  const rotated = (meta.orientation ?? 1) >= 5;
  return {
    linear: lin / n,
    contrast: Math.sqrt(Math.max(sumY2 / n - meanY * meanY, 0)),
    saturation: chroma / n,
    warmth: r / b,
    width: rotated ? meta.height : meta.width,
    height: rotated ? meta.width : meta.height,
  };
};

const signed = (n, digits, unit) =>
  `${n > 0 ? "+" : "-"}${Math.abs(n).toFixed(digits)}${unit}`;

const measureEdit = async (originalFile, editedFile) => {
  const [a, e] = await Promise.all([
    profile(originalFile),
    profile(editedFile),
  ]);
  const changes = [];

  const ev = Math.log2(e.linear / a.linear);
  if (Math.abs(ev) >= 0.1) changes.push(`Exposure ${signed(ev, 1, " EV")}`);

  const contrast = (e.contrast / a.contrast - 1) * 100;
  if (Math.abs(contrast) >= 5) {
    changes.push(`Contrast ${signed(contrast, 0, "%")}`);
  }

  const sat = (e.saturation / a.saturation - 1) * 100;
  if (Math.abs(sat) >= 5) changes.push(`Saturation ${signed(sat, 0, "%")}`);

  const warmth = Math.log2(e.warmth / a.warmth);
  if (Math.abs(warmth) >= 0.03) {
    changes.push(warmth > 0 ? "Warmer" : "Cooler");
  }

  // A RAW develops a few pixels larger than the in-camera JPEG (5202x3464 vs
  // 5184x3456 on a T2i), so only a real shrink or an aspect change is a crop.
  const aspectShift = e.width / e.height / (a.width / a.height) - 1;
  const shrink = Math.min(e.width / a.width, e.height / a.height);
  if (Math.abs(aspectShift) > 0.01 || shrink < 0.97) {
    changes.push(`Cropped to ${(e.width / e.height).toFixed(2)}:1`);
  }

  return changes;
};

const readNote = (editedFile) => {
  const noteFile = path.join(
    path.dirname(editedFile),
    `${stem(editedFile)}.txt`,
  );
  if (!fs.existsSync(noteFile)) return undefined;
  return fs.readFileSync(noteFile, "utf8").split("\n")[0].trim() || undefined;
};

// ── Main ─────────────────────────────────────────────────────

const originals = listImages(folder);
const edits = new Map(
  listImages(path.join(folder, "Edited")).map((f) => [stem(f), f]),
);
const originalsByName = new Map(originals.map((f) => [stem(f), f]));
const names = [...new Set([...originalsByName.keys(), ...edits.keys()])];

const exif = readExif([...originalsByName.values(), ...edits.values()]);

const meta = fs.existsSync(META_FILE)
  ? JSON.parse(fs.readFileSync(META_FILE, "utf8"))
  : {};

let editedCount = 0;
for (const name of names) {
  const original = originalsByName.get(name);
  const edited = edits.get(name);
  // Prefer the original's EXIF; fall back to the edit's if it kept any.
  const entry = shotInfo(exif.get(original) ?? exif.get(edited));

  if (edited) {
    const changes = original ? await measureEdit(original, edited) : [];
    const note = readNote(edited);
    entry.edit = { changes, ...(note && { note }) };
    editedCount++;
  }
  meta[`${metaKey}/${name}`] = entry;
}

const sorted = Object.fromEntries(
  Object.entries(meta).sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true }),
  ),
);
fs.mkdirSync(path.dirname(META_FILE), { recursive: true });
fs.writeFileSync(META_FILE, JSON.stringify(sorted, null, 2) + "\n");
execFileSync("npx", ["prettier", "--write", META_FILE], { stdio: "ignore" });

console.log(
  `  Shot info for ${names.length} photos (${editedCount} edited) → ${META_FILE}`,
);
