#!/usr/bin/env bash
# Optimize single-day rolls: raw/canon/<slug>/ → src/assets/canon/<slug>/optimized/
# Photos exported to raw/canon/<slug>/Edited/ replace their originals.
set -euo pipefail

cd "$(dirname "$0")/.."
source ./scripts/image-lib.sh

RAW="raw/canon"
DEST="src/assets/canon"

require_tool sharp "npm install -g sharp-cli"

echo "Optimizing images from $RAW → $DEST"

shopt -s nullglob

for folder in "$RAW"/*/; do
  foldername=$(basename "$folder")

  # Trip folders hold per-day subfolders; image-trip.sh handles those.
  if ! has_images "${folder%/}"; then
    echo "Skipping $foldername (no photos here, use image-trip.sh for trips)"
    continue
  fi

  echo "Processing folder: $foldername"
  optimize_folder "${folder%/}" "$DEST/$foldername/optimized"
done

echo "Optimization complete."
