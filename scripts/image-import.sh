#!/usr/bin/env bash
# Copy a camera export folder into raw/, ready for image.sh / image-trip.sh.
#
# Only JPEG-style photos and the Edited/ exports are copied. RAW files
# (.CR2 etc.), editor project files (.af, Affinity/) and everything else stay
# where they are. If the shots span more than one day (by EXIF date) they are
# split into raw/<camera>/<slug>/<date>/ for image-trip.sh, otherwise they go
# flat into raw/<camera>/<slug>/ for image.sh.
#
# Usage: ./scripts/image-import.sh <source-folder> <slug> [camera]
#   e.g. ./scripts/image-import.sh "$HOME/Pictures/Canon/Bronte Creek 4:10:26" bronte-4-10-26
set -euo pipefail

cd "$(dirname "$0")/.."
source ./scripts/image-lib.sh

SRC="${1:?Usage: ./scripts/image-import.sh <source-folder> <slug> [camera]}"
SLUG="${2:?Usage: ./scripts/image-import.sh <source-folder> <slug> [camera]}"
CAMERA="${3:-canon}"

require_tool exiftool "brew install exiftool"

if [ ! -d "$SRC" ]; then
  echo "No folder at $SRC"
  exit 1
fi

shopt -s nullglob

# YYYY-MM-DD the photo was taken, falling back to the file's modified date.
photo_date() {
  local d
  d=$(exiftool -s3 -d %Y-%m-%d -DateTimeOriginal "$1" 2>/dev/null || true)
  echo "${d:-$(date -r "$1" +%Y-%m-%d)}"
}

originals=("$SRC"/*.{jpg,jpeg,png,heic,heif,JPG,JPEG,PNG,HEIC,HEIF})
edits=("$SRC"/Edited/*.{jpg,jpeg,png,heic,heif,JPG,JPEG,PNG,HEIC,HEIF})

if [ ${#originals[@]} -eq 0 ] && [ ${#edits[@]} -eq 0 ]; then
  echo "No photos found in $SRC"
  exit 1
fi

dates=$(for f in ${originals[@]+"${originals[@]}"}; do photo_date "$f"; done | sort -u)
ndates=$(printf '%s\n' "$dates" | grep -c . || true)

# Where a photo taken on $1 goes.
dest_for() {
  if [ "$ndates" -gt 1 ]; then
    echo "raw/$CAMERA/$SLUG/$1"
  else
    echo "raw/$CAMERA/$SLUG"
  fi
}

for f in ${originals[@]+"${originals[@]}"}; do
  dest=$(dest_for "$(photo_date "$f")")
  mkdir -p "$dest"
  cp -pn "$f" "$dest/"
done

for f in ${edits[@]+"${edits[@]}"}; do
  name=$(basename "$f")
  name="${name%.*}"
  if orig=$(find_variant "$SRC" "$name"); then
    day=$(photo_date "$orig")
  else
    day=$(photo_date "$f")
  fi
  dest=$(dest_for "$day")/Edited
  mkdir -p "$dest"
  cp -p "$f" "$dest/"
  # Optional one-line description of the edits, shown with the photo.
  [ -f "$SRC/Edited/$name.txt" ] && cp -p "$SRC/Edited/$name.txt" "$dest/"
done

skipped=$(find "$SRC" -type f ! -iname '*.jpg' ! -iname '*.jpeg' ! -iname '*.png' ! -iname '*.heic' ! -iname '*.heif' ! -iname '*.txt' ! -name '.DS_Store' | wc -l | tr -d ' ')

echo "Imported ${#originals[@]} photos and ${#edits[@]} edits into raw/$CAMERA/$SLUG ($ndates day(s): $(echo $dates))"
echo "Left alone: $skipped other files (RAW, editor projects, ...)"
if [ "$ndates" -gt 1 ]; then
  echo "Next: ./scripts/image-trip.sh $CAMERA $SLUG"
else
  echo "Next: ./scripts/image.sh"
fi
