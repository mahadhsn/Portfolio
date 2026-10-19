#!/usr/bin/env bash
# Shared helpers for image.sh, image-trip.sh and image-import.sh. Source it,
# don't run it.
#
# Only these extensions are ever published. RAW files (.CR2 etc.) are not in
# the list, so they can never be picked up.
IMAGE_EXTS="jpg jpeg png heic heif JPG JPEG PNG HEIC HEIF"

require_tool() {
  # $1 = command, $2 = install hint
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "$1 not found. Install it with:"
    echo "$2"
    exit 1
  fi
}

# Prints "<folder>/<dir>/<name>.<ext>" for the first extension that exists.
find_variant() {
  local dir="$1" name="$2" ext
  for ext in $IMAGE_EXTS; do
    if [ -f "$dir/$name.$ext" ]; then
      echo "$dir/$name.$ext"
      return 0
    fi
  done
  return 1
}

# True if the folder directly contains at least one photo.
has_images() {
  local f
  for f in "$1"/*.{jpg,jpeg,png,heic,heif,JPG,JPEG,PNG,HEIC,HEIF}; do
    [ -e "$f" ] && return 0
  done
  return 1
}

# Optimize one source image to a 1600px WebP. Skips if the output exists,
# unless the source is an edit that was exported after the output was made.
optimize_one() {
  local src="$1" outfile="$2" tag="$3"

  if [ -f "$outfile" ] && ! { [ "$tag" = "edited" ] && [ "$src" -nt "$outfile" ]; }; then
    echo "  Skipping $(basename "$src") (already optimized)"
    return 0
  fi

  echo "  Optimizing $(basename "$src")${tag:+ ($tag)} → $(basename "$outfile")"

  sharp -i "$src" \
    --autoOrient \
    resize 1600 --withoutEnlargement \
    -f webp -q 75 \
    -o "$outfile"
}

# Optimize one flat folder of photos.
#   $1 = source folder (originals, plus an optional Edited/ subfolder)
#   $2 = output folder
#
# A photo that has an export of the same name in Edited/ is published from the
# edit; everything else is published from the original. The WebP keeps the
# original's name either way.
optimize_folder() {
  local folder="$1" outdir="$2" f base name src

  mkdir -p "$outdir"

  for f in "$folder"/*.{jpg,jpeg,png,heic,heif,JPG,JPEG,PNG,HEIC,HEIF}; do
    [ -e "$f" ] || continue
    base=$(basename "$f")
    name="${base%.*}"

    if src=$(find_variant "$folder/Edited" "$name"); then
      optimize_one "$src" "$outdir/$name-1600.webp" edited
    else
      optimize_one "$f" "$outdir/$name-1600.webp" ""
    fi
  done

  # Edits whose original JPG isn't in the folder (e.g. only the RAW was kept).
  for f in "$folder"/Edited/*.{jpg,jpeg,png,heic,heif,JPG,JPEG,PNG,HEIC,HEIF}; do
    [ -e "$f" ] || continue
    base=$(basename "$f")
    name="${base%.*}"
    if ! find_variant "$folder" "$name" >/dev/null; then
      optimize_one "$f" "$outdir/$name-1600.webp" edited
    fi
  done
}
