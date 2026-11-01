#!/usr/bin/env bash
# Deploy kasajtako-law.com — build locally, upload to the VPS.
# Usage: ./deploy.sh
set -euo pipefail

SERVER="root@kasajtako-law.com"
SITE_USER="kasajtako"
REMOTE_DIR="/home/kasajtako/htdocs/kasajtako-law.com"

cd "$(dirname "$0")"

echo "==> Building"
npm run build

echo "==> Uploading to $SERVER:$REMOTE_DIR"
rsync -avz --delete --exclude '.well-known' dist/ "$SERVER:$REMOTE_DIR/"

echo "==> Fixing ownership and clearing the Varnish cache"
ssh "$SERVER" "chown -R ${SITE_USER}:${SITE_USER} ${REMOTE_DIR}; varnishadm 'ban req.url ~ \".\"' >/dev/null 2>&1 || true"

echo "==> Verifying"
curl -sI https://kasajtako-law.com | head -1

echo "Done — https://kasajtako-law.com"
