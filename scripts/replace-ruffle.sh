#!/usr/bin/env bash
set -euo pipefail

OLD_URL='https://xboxkid333.github.io/RUFFLE/ruffle.js'
NEW_URL='https://xboxkid333.github.io/RUFFLE/ruffle.js'

usage() {
  echo "Usage: $0 [--dry-run]"
  echo "Searches workspace for occurrences of:"
  echo "  $OLD_URL"
  echo "and replaces them with:"
  echo "  $NEW_URL"
  echo
  echo "Options:"
  echo "  --dry-run   List files that would be changed without modifying them"
}

DRY_RUN=0
for arg in "${@:-}"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $arg"; usage; exit 1 ;;
  esac
done

cd /workspaces/games

# Find all text files containing the OLD_URL (skip .git and binary files).
mapfile -d '' FILES < <(grep -IRlZ --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build -I "$OLD_URL" . || true)

if (( ${#FILES[@]} == 0 )); then
  echo "No files contain the old URL."
  exit 0
fi

if (( DRY_RUN )); then
  echo "Files that would be updated:"
  printf '%s\n' "${FILES[@]}"
  echo
  echo "Preview lines with matches:"
  grep -IRn --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build -I "$OLD_URL" .
  exit 0
fi

echo "Updating ${#FILES[@]} file(s)..."
for f in "${FILES[@]}"; do
  sed -i "s|$OLD_URL|$NEW_URL|g" "$f"
  echo "Updated: $f"
done

echo "Done."
