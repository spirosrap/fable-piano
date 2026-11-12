#!/bin/sh
# Serve the piano on http://localhost:8795 (or the port given) and open it in the browser.
# The library is fetched over http, so the page cannot simply be opened as a file.
cd "$(dirname "$0")" || exit 1
PORT="${1:-8795}"
URL="http://localhost:$PORT/"
( sleep 0.7; xdg-open "$URL" >/dev/null 2>&1 || open "$URL" >/dev/null 2>&1 ) &
echo "Fable Piano on $URL  (Ctrl+C to stop)"
exec python3 -m http.server "$PORT" --bind 127.0.0.1
