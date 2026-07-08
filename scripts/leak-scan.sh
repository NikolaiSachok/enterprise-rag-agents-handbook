#!/usr/bin/env bash
#
# Generic leak scan — the deterministic, GENERIC gate.
#
# Scope: secrets / credentials, local filesystem paths, and non-example emails only.
# This script contains NO domain wordlist. The domain-specific leak gate is private and
# lives elsewhere — do not add domain terms here.
#
# Exit code: 0 if clean, 1 if any match is found (so CI and the pre-commit hook can block).
#
set -euo pipefail

# Run from the repo root regardless of where the hook / CI invokes us.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Directories/files that produce false positives or are not our content.
# package-lock.json is excluded on purpose: lockfile integrity hashes (sha512-...) and
# package names like "gfm-task-list-item" trip naive secret/token patterns.
EXCLUDES=(
  --exclude-dir=.git
  --exclude-dir=node_modules
  --exclude-dir=build
  --exclude-dir=.docusaurus
  --exclude-dir=.cache-loader
  --exclude=package-lock.json
  --exclude=yarn.lock
  --exclude=pnpm-lock.yaml
)

# Precise, anchored patterns — deliberately narrow to avoid false positives.
PATTERNS=(
  'ghp_[A-Za-z0-9]{36}'                 # GitHub personal access token (classic)
  'github_pat_[A-Za-z0-9_]{20,}'        # GitHub fine-grained PAT
  'AKIA[0-9A-Z]{16}'                    # AWS access key id
  '-----BEGIN [A-Z ]*PRIVATE KEY-----'  # PEM private key header
  'sk-[A-Za-z0-9]{20,}'                 # Generic "sk-" secret key (OpenAI-style, etc.)
  '/Users/[a-z]'                        # macOS home path
  '/home/[a-z]'                         # Linux home path
)

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT
found=0

for pat in "${PATTERNS[@]}"; do
  if grep -rInE "${EXCLUDES[@]}" -e "$pat" . >>"$tmp" 2>/dev/null; then
    found=1
  fi
done

# Emails, excluding the RFC 2606 reserved example domains (example.com / example.org),
# which are the only emails allowed to appear in docs.
if grep -rInE "${EXCLUDES[@]}" \
     -e '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}' . 2>/dev/null \
     | grep -vE '@example\.(com|org)([^A-Za-z0-9.-]|$)' >>"$tmp"; then
  found=1
fi

if [[ "$found" -ne 0 ]]; then
  echo "leak-scan: FAIL — potential secrets / credentials / local paths / emails found:" >&2
  echo "----------------------------------------------------------------------" >&2
  cat "$tmp" >&2
  echo "----------------------------------------------------------------------" >&2
  echo "If any match is a legitimate example, use example.com/example.org or a placeholder." >&2
  exit 1
fi

echo "leak-scan: PASS — no generic secrets, credentials, local paths, or non-example emails detected."
