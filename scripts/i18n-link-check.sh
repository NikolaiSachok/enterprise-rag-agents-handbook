#!/usr/bin/env bash
#
# i18n link gate for the unreleased-inclusive build.
#
# Context. `onBrokenLinks` throws for released (deployed) builds but only warns when
# HANDBOOK_INCLUDE_UNRELEASED=1 (see docusaurus.config.ts). The reason is one class of
# link that gated partial translation makes unavoidable and that never ships: an
# untranslated fallback lesson (served from `docs/` in the unreleased locale) links to
# the glossary via a relative `.md` path; once the glossary alone is translated,
# Docusaurus cannot path-match that link across the `docs/` (fallback) and
# `i18n/<locale>/` (translated) trees — and the localized slug wouldn't match the EN
# one anyway — until the lesson itself is translated. Those links resolve correctly in
# every deployed build.
#
# This gate keeps CI strict everywhere else. It runs the unreleased-inclusive build and
# FAILS on any broken link whose source page is NOT such a tolerable fallback, i.e.:
#   - any broken link in a released locale (en, ru) — real, shipping breakage; and
#   - any broken link on a page that IS translated in an unreleased locale — a real
#     broken anchor/link in authored content (e.g. a future SK lesson's terms-footer
#     pointing at a wrong glossary slug).
# A broken link is tolerated ONLY when its source is an unreleased-locale page that has
# no translation file yet (a pure EN fallback). The gate self-maintains as locales fill
# in: the day a lesson is translated, its links must resolve or this gate fails.
#
# Usage: scripts/i18n-link-check.sh   (from repo root; runs the build itself)

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# Unreleased locales that may legitimately carry EN-fallback pages. Keep in sync with
# UNRELEASED_LOCALES in docusaurus.config.ts (single source of truth would be nicer,
# but the config is TS; this list is small and changes once per locale launch).
UNRELEASED_LOCALES=(sk)

I18N_DOCS_ROOT="i18n" # i18n/<locale>/docusaurus-plugin-content-docs/current/<docpath>

LOG="$(mktemp)"
trap 'rm -f "$LOG"' EXIT

echo ">> Building with unreleased locales included (onBrokenLinks: warn)…"
HANDBOOK_INCLUDE_UNRELEASED=1 npm run build 2>&1 | tee "$LOG"
BUILD_STATUS="${PIPESTATUS[0]}"

if [ "$BUILD_STATUS" -ne 0 ]; then
  echo "i18n-link-check: FAIL — build errored (exit $BUILD_STATUS), not a broken-link warning."
  exit "$BUILD_STATUS"
fi

# Is the source page an unreleased-locale page with no translation file (a fallback)?
is_tolerable_fallback() {
  local src="$1" loc docpath f
  for loc in "${UNRELEASED_LOCALES[@]}"; do
    # Match ".../<loc>/<docpath>" anywhere in the source URL (baseUrl-agnostic).
    if [[ "$src" == *"/$loc/"* ]]; then
      docpath="${src##*/$loc/}"      # everything after the locale segment
      docpath="${docpath%/}"          # trim trailing slash
      # The locale root (empty docpath) is the intro — a translated page; not a fallback.
      [ -z "$docpath" ] && return 1
      f="$I18N_DOCS_ROOT/$loc/docusaurus-plugin-content-docs/current/$docpath"
      # Translated iff a matching file exists → NOT a tolerable fallback.
      if [ -f "$f.md" ] || [ -f "$f/index.md" ] || [ -f "$f.mdx" ] || [ -f "$f/index.mdx" ]; then
        return 1
      fi
      return 0
    fi
  done
  return 1 # not an unreleased-locale page → never tolerable (released content)
}

SOURCES=()
while IFS= read -r src; do
  [ -n "$src" ] && SOURCES+=("$src")
done < <(grep -oE 'Broken link on source page path = [^ ]+' "$LOG" \
  | sed -E 's/^Broken link on source page path = //; s/:$//')

REAL_BREAKS=()
if [ "${#SOURCES[@]}" -gt 0 ]; then
  for src in "${SOURCES[@]}"; do
    if ! is_tolerable_fallback "$src"; then
      REAL_BREAKS+=("$src")
    fi
  done
fi

if [ "${#REAL_BREAKS[@]}" -gt 0 ]; then
  echo ""
  echo "i18n-link-check: FAIL — ${#REAL_BREAKS[@]} broken link(s) on shipping / translated pages:"
  printf '  - %s\n' "${REAL_BREAKS[@]}" | sort -u
  echo ""
  echo "Only EN-fallback pages of an unreleased locale may carry unresolved glossary links."
  exit 1
fi

TOLERATED="${#SOURCES[@]}"
echo ""
echo "i18n-link-check: PASS — build clean; $TOLERATED tolerated fallback link(s) in unreleased locales, 0 real breaks."
