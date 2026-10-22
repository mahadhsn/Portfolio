import photoMeta from "../../data/photoMeta.json";

// Static import.meta.glob patterns must be string literals at build time.
// All gallery patterns are defined here and exported as a lookup map.

const belfountain = import.meta.glob(
  "../../assets/canon/belfountain-30-6-25/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const killbear = import.meta.glob(
  "../../assets/canon/killbear-3-8-25/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const toronto = import.meta.glob(
  "../../assets/canon/toronto-27-8-25/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const bronte = import.meta.glob(
  "../../assets/canon/bronte-31-8-25/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const stirling = import.meta.glob(
  "../../assets/canon/stirling-11-10-25/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const mdl = import.meta.glob(
  "../../assets/canon/mdl-18-1-26/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const orchard = import.meta.glob(
  "../../assets/canon/orchard-11-5-26/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const restoule = import.meta.glob(
  "../../assets/canon/restoule-16-5-26/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const bronte26 = import.meta.glob(
  "../../assets/canon/bronte-4-10-26/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);

// Banff trip - one glob per shot day, shared across cameras.
const banffDay1 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-06-27/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const banffDay2 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-06-28/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const banffDay3 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-06-29/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const banffDay5 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-07-01/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const banffDay6 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-07-02/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const banffDay7 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-07-03/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);

// Campbellford trip - one glob per shot day.
const campbellfordDay1 = import.meta.glob(
  "../../assets/campbellford-11-10-26/2026-10-11/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);
const campbellfordDay2 = import.meta.glob(
  "../../assets/campbellford-11-10-26/2026-10-12/optimized/*-1600.webp",
  { eager: true, query: "?url", import: "default" },
);

// Shot info and edit summaries written by image-meta.mjs, keyed by
// "<assets folder>/<day>/<photo>" without the "optimized/" or "-1600.webp".
const metaKey = (path) =>
  path
    .replace("../../assets/", "")
    .replace("/optimized/", "/")
    .replace(/-1600\.webp$/, "");

const sortedEntries = (globResult) =>
  Object.entries(globResult)
    .filter(([, v]) => typeof v === "string")
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

const sources = {
  belfountain,
  killbear,
  toronto,
  bronte,
  stirling,
  mdl,
  orchard,
  restoule,
  bronte26,
  banffDay1,
  banffDay2,
  banffDay3,
  banffDay5,
  banffDay6,
  banffDay7,
  campbellfordDay1,
  campbellfordDay2,
};

const mapSources = (fn) =>
  Object.fromEntries(
    Object.entries(sources).map(([key, glob]) => [
      key,
      fn(sortedEntries(glob)),
    ]),
  );

export const galleries = mapSources((entries) => entries.map(([, url]) => url));

// Parallel to `galleries`: the shot info for each photo, or null if unknown.
export const galleryMeta = mapSources((entries) =>
  entries.map(([path]) => photoMeta[metaKey(path)] ?? null),
);
