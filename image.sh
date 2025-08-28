#!/usr/bin/env bash
set -euo pipefail

RAW="raw/canon"
DEST="src/assets/canon"


if ! command -v sharp >/dev/null 2>&1; then
  echo "sharp-cli not found. Install it globally with: npm install -g sharp-cli"
  echo "npm install -g sharp-cli"
  exit 1
fi

echo "Optimizing images from $RAW → $DEST"

shopt -s nullglob
for folder in "$RAW"/*/; do
  foldername=$(basename "$folder")
  outdir="$DEST/$foldername/optimized"
  mkdir -p "$outdir"

  echo "Processing folder: $foldername → $outdir"

  for f in "$folder"/*.{jpg,jpeg,png,heic,heif,JPG,JPEG,PNG,HEIC,HEIF}; do
    [ -e "$f" ] || continue
    base=$(basename "$f")
    name="${base%.*}"

    # Desktop (1600px) → WebP (respect EXIF orientation)
    sharp -i "$f" --autoOrient -o "$outdir/${name}-1600.webp" -f webp -q 75 \
      resize 1600 --withoutEnlargement

  done
done

echo "Optimized files placed under $DEST/<folder>/optimized"