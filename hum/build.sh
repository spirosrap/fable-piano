#!/bin/sh
# Builds the hum-along module from the CHIMERA voice engine (https://github.com/jamesondh/chimera-vocal-synth,
# here through the checkout of spirosrap/chimera-song-mouth; MIT). Needs bun, and `bun install` done in that checkout.
#   CHIMERA=/path/to/chimera-song-mouth hum/build.sh
set -e
cd "$(dirname "$0")"
CHIMERA="${CHIMERA:-$HOME/Work/chimera-song-mouth}"
[ -f "$CHIMERA/src/wasm/chimera.wasm" ] || { echo "no CHIMERA checkout at $CHIMERA"; exit 1; }
ln -sfn "$CHIMERA/src" src/chimera
bun build src/head.ts src/worker.ts --outdir . --target browser --format esm --minify --external '*.wasm?url'
cp "$CHIMERA/src/wasm/chimera.wasm" chimera.wasm
cp "$CHIMERA/LICENSE" LICENSE-chimera
( cd "$CHIMERA" && git rev-parse HEAD ) > CHIMERA-REVISION
ls -la head.js worker.js chimera.wasm
