#!/bin/sh

deno run \
  --allow-env \
  --allow-sys \
  --allow-read \
  --allow-write \
  "$PWD/index.ts" \
  "$@"
