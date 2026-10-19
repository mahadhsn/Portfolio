#!/usr/bin/env bash
# Optimize a multi-day trip shoot into shared per-day galleries.
# Multiple cameras can point at the same trip slug - outputs land in the
# same destination day folder so a day's gallery can combine cameras.
# Photos exported to <day>/Edited/ replace their originals.
#
# Usage: ./scripts/image-trip.sh <camera> <trip-slug>
#   e.g. ./scripts/image-trip.sh fuji banff-27-6-26
set -euo pipefail

cd "$(dirname "$0")/.."
source ./scripts/image-lib.sh

CAMERA="${1:?Usage: ./scripts/image-trip.sh <camera> <trip-slug>}"
TRIP="${2:?Usage: ./scripts/image-trip.sh <camera> <trip-slug>}"

RAW="raw/$CAMERA/$TRIP"
DEST="src/assets/$TRIP"

require_tool sharp "npm install -g sharp-cli"

if [ ! -d "$RAW" ]; then
  echo "No raw folder at $RAW"
  exit 1
fi

echo "Optimizing trip photos from $RAW → $DEST"

shopt -s nullglob

for folder in "$RAW"/*/; do
  day=$(basename "$folder")

  echo "Processing day: $day"
  optimize_folder "${folder%/}" "$DEST/$day/optimized"
done

echo "Optimization complete."
