#!/usr/bin/env bash
# Convert a written log's images to web-sized WebP.
#
# Takes every image in public/images/logs/<slug>/ (jpg, png, HEIC, ...) and
# writes a 1100px-wide WebP next to it. The originals are moved to
# raw/logs/<slug>/ (gitignored) so they aren't deployed, and the image links in
# src/data/logs/<slug>.md are switched to the new .webp files.
#
# Usage: ./scripts/image-log.sh <slug>
#   e.g. ./scripts/image-log.sh banff   (for src/data/logs/banff.md)
set -euo pipefail

cd "$(dirname "$0")/.."
source ./scripts/image-lib.sh

SLUG="${1:?Usage: ./scripts/image-log.sh <slug>}"
DIR="public/images/logs/$SLUG"
BACKUP="raw/logs/$SLUG"
LOG="src/data/logs/$SLUG.md"

require_tool sharp "npm install -g sharp-cli"

if [ ! -d "$DIR" ]; then
  echo "No image folder at $DIR"
  exit 1
fi

shopt -s nullglob
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
converted=0

for f in "$DIR"/*; do
  [ -f "$f" ] || continue
  base=$(basename "$f")
  name="${base%.*}"
  ext=$(echo "${base##*.}" | tr '[:upper:]' '[:lower:]')

  case "$ext" in
    jpg|jpeg|png|heic|heif) ;;
    *) continue ;;
  esac

  out="$DIR/$name.webp"
  if [ -e "$out" ]; then
    echo "  Skipping $base ($name.webp already exists)"
    continue
  fi

  src="$f"
  # sharp can't decode HEIC, but macOS can; the orientation tag is kept.
  if [ "$ext" = "heic" ] || [ "$ext" = "heif" ]; then
    require_tool sips "HEIC conversion needs macOS (sips)"
    src="$tmp/$name.jpg"
    sips -s format jpeg "$f" --out "$src" >/dev/null
  fi

  echo "  Converting $base → $name.webp"
  sharp -i "$src" \
    --autoOrient \
    resize 1100 --withoutEnlargement \
    -f webp -q 80 \
    -o "$out" >/dev/null

  mkdir -p "$BACKUP"
  mv "$f" "$BACKUP/"
  # Point the log at the new file.
  if [ -f "$LOG" ]; then
    OLD="/images/logs/$SLUG/$base" NEW="/images/logs/$SLUG/$name.webp" \
      perl -pi -e 's/\Q$ENV{OLD}\E/$ENV{NEW}/g' "$LOG"
  fi
  converted=$((converted + 1))
done

echo "Converted $converted image(s). Originals are in $BACKUP."
[ -f "$LOG" ] || echo "Note: $LOG not found, so no links were updated."
