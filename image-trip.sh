#!/usr/bin/env bash
# Optimize a multi-day trip shoot into shared per-day galleries.
# Multiple cameras can point at the same trip slug — outputs land in the
# same destination day folder so a day's gallery can combine cameras.
#
# Usage: ./image-trip.sh <camera> <trip-slug>
#   e.g. ./image-trip.sh fuji banff-27-6-26
set -euo pipefail

CAMERA="${1:?Usage: ./image-trip.sh <camera> <trip-slug>}"
TRIP="${2:?Usage: ./image-trip.sh <camera> <trip-slug>}"

RAW="raw/$CAMERA/$TRIP"
DEST="src/assets/$TRIP"

if ! command -v sharp >/dev/null 2>&1; then
  echo "sharp-cli not found. Install it globally with:"
  echo "npm install -g sharp-cli"
  exit 1
fi

if [ ! -d "$RAW" ]; then
  echo "No raw folder at $RAW"
  exit 1
fi

echo "Optimizing trip photos from $RAW → $DEST"

shopt -s nullglob

for folder in "$RAW"/*/; do
  day=$(basename "$folder")
  outdir="$DEST/$day/optimized"
  mkdir -p "$outdir"

  echo "Processing day: $day"

  for f in "$folder"/*.{jpg,jpeg,png,heic,heif,JPG,JPEG,PNG,HEIC,HEIF}; do
    [ -e "$f" ] || continue

    base=$(basename "$f")
    name="${base%.*}"
    outfile="$outdir/${name}-1600.webp"

    if [ -f "$outfile" ]; then
      echo "  Skipping $base (already optimized)"
      continue
    fi

    echo "  Optimizing $base → $(basename "$outfile")"

    sharp -i "$f" \
      --autoOrient \
      resize 1600 --withoutEnlargement \
      -f webp -q 75 \
      -o "$outfile"
  done
done

echo "Optimization complete."
