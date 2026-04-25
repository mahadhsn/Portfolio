const modules = import.meta.glob("./logs/*.md", { query: "?raw", eager: true });

function parseLog(slug, raw) {
  const lines = raw.split("\n").filter((l) => l.trim());
  const title = lines[0]?.replace(/^#\s+/, "") ?? slug;
  const metaMatch = lines[1]?.match(/^_(.+)_$/);
  const [datePart, readPart, tagPart] = metaMatch
    ? metaMatch[1].split(" · ")
    : [];

  const rawDate = datePart?.trim() ?? "";
  const parsed = rawDate ? new Date(rawDate) : new Date(0);
  const display =
    !isNaN(parsed) && rawDate
      ? parsed
          .toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })
          .toUpperCase()
      : rawDate.toUpperCase();

  return {
    id: slug,
    title,
    date: display,
    read: readPart?.trim().replace(/ read$/, "") ?? "",
    tag: tagPart?.trim() ?? "",
    path: `/logbook/${slug}`,
    _sortDate: parsed,
  };
}

export const LOGS = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.replace("./logs/", "").replace(".md", "");
    return parseLog(slug, mod.default);
  })
  .sort((a, b) => b._sortDate - a._sortDate);
