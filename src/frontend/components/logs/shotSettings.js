// Formatting for the per-photo shot info stored in src/data/photoMeta.json.

// "ISO 100 · f/7.1 · 1/400s · 250mm", skipping anything the file didn't record.
export const formatSettings = (meta) =>
  [
    meta?.iso && `ISO ${meta.iso}`,
    meta?.aperture && `f/${meta.aperture}`,
    meta?.shutter && `${meta.shutter}s`,
    meta?.focal && `${meta.focal}mm`,
  ]
    .filter(Boolean)
    .join(" · ");

// The camera only goes on each photo when a gallery mixes cameras; otherwise
// it's already in the page heading.
export const usesMultipleCameras = (metas) =>
  new Set((metas || []).map((m) => m?.camera).filter(Boolean)).size > 1;
