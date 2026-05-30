#!/usr/bin/env bash
set -euo pipefail

RAW="raw/canon"
DEST="src/assets/canon"

if ! command -v sharp >/dev/null 2>&1; then
  echo "sharp-cli not found. Install it globally with:"
  echo "npm install -g sharp-cli"
  exit 1
fi

echo "Optimizing images from $RAW → $DEST"

shopt -s nullglob

for folder in "$RAW"/*/; do
  foldername=$(basename "$folder")
  outdir="$DEST/$foldername/optimized"
  mkdir -p "$outdir"

  echo "Processing folder: $foldername"

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