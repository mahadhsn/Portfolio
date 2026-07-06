// Static import.meta.glob patterns must be string literals at build time.
// All gallery patterns are defined here and exported as a lookup map.

const belfountain = import.meta.glob(
  "../../assets/canon/belfountain-30-6-25/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const killbear = import.meta.glob(
  "../../assets/canon/killbear-3-8-25/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const toronto = import.meta.glob(
  "../../assets/canon/toronto-27-8-25/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const bronte = import.meta.glob(
  "../../assets/canon/bronte-31-8-25/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const stirling = import.meta.glob(
  "../../assets/canon/stirling-11-10-25/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const mdl = import.meta.glob(
  "../../assets/canon/mdl-18-1-26/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const orchard = import.meta.glob(
  "../../assets/canon/orchard-11-5-26/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const restoule = import.meta.glob(
  "../../assets/canon/restoule-16-5-26/optimized/*-1600.webp",
  { eager: true, as: "url" },
);

// Banff trip — one glob per shot day, shared across cameras.
const banffDay1 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-06-27/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const banffDay2 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-06-28/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const banffDay3 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-06-29/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const banffDay5 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-07-01/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const banffDay6 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-07-02/optimized/*-1600.webp",
  { eager: true, as: "url" },
);
const banffDay7 = import.meta.glob(
  "../../assets/banff-27-6-26/2026-07-03/optimized/*-1600.webp",
  { eager: true, as: "url" },
);

const toSortedUrls = (globResult) =>
  Object.values(globResult)
    .filter((v) => typeof v === "string")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

export const galleries = {
  belfountain: toSortedUrls(belfountain),
  killbear: toSortedUrls(killbear),
  toronto: toSortedUrls(toronto),
  bronte: toSortedUrls(bronte),
  stirling: toSortedUrls(stirling),
  mdl: toSortedUrls(mdl),
  orchard: toSortedUrls(orchard),
  restoule: toSortedUrls(restoule),
  banffDay1: toSortedUrls(banffDay1),
  banffDay2: toSortedUrls(banffDay2),
  banffDay3: toSortedUrls(banffDay3),
  banffDay5: toSortedUrls(banffDay5),
  banffDay6: toSortedUrls(banffDay6),
  banffDay7: toSortedUrls(banffDay7),
};
