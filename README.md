# Fable Piano — library edition

A physically modelled piano that runs in the browser, with a library of 1,276 recorded concert performances to play on it
and a simulated voice that hums along.

**Live: https://agenticspiros.com/fable-piano/**

This is built on **[Fable Piano](https://kishida.github.io/webdemos/instruments/piano-fable/index.html) by [kishida](https://github.com/kishida)**
([source](https://github.com/kishida/webdemos/tree/main/instruments/piano-fable)), made with Fable 5.2.
The instrument is entirely their work: strings as bidirectional waveguides, hammers with nonlinear felt, a shared bridge and
soundboard, no samples anywhere. So are the three-movement “Fable” sonata written for it and the page that shows it all being played.

## What this edition adds

- **A library** of 764 works in 1,276 performances from the MAESTRO dataset: real pianists, recorded key by key and pedal by
  pedal, replayed on the modelled piano.
- Search by composer or title, browse by composer, a “Well known” shelf, starred pieces and recently played.
- Where a work was recorded more than once, each performance can be chosen by its year.
- Continuous play, shuffle, previous / next. Moving on to the next piece also works while the tab is in the background.
- **Hum along**: a head from the [CHIMERA](https://github.com/jamesondh/chimera-vocal-synth) voice engine hums the tune of
  whatever is playing, on "la", "da", "doo", "na" or "ah", in a high, low or child's voice. The page picks the top line out of
  the piano part, moves it into the singer's range, and has the voice engine render it a few seconds ahead of the music in
  background workers; each stretch then starts on the piano's own audio clock, and the head moves as the engine's mouth did.
- The interface in English.

The original sonata is still there (first in the library), and so is opening or dropping any MIDI file of your own.

## Run it

```sh
./serve.sh          # serves http://localhost:8795 and opens it
```

The library is fetched over http, so the page needs a web server; any static one will do. Opened directly as a file, only the
sonata and dropped MIDI files play.

| Key | |
| --- | --- |
| `L` | open / close the library |
| `Space` | play / pause |
| `[` `]` | back to the start or previous piece / next piece |
| `Z`–`M`, `Q`–`I` | play the keyboard |
| `Shift` | sustain pedal |

## What is where

| | |
| --- | --- |
| `index.html` | the page: interface, sequencer and library (upstream's page, extended) |
| `engine.js`, `score.js`, `midi.js` | the piano model, the sonata and the MIDI reader, unchanged from upstream commit [`1123b16`](https://github.com/kishida/webdemos/commit/1123b16140723011a086bb4b4613afebbdbad192) |
| `library.js` | the catalogue, generated |
| `hum.js` | hum-along: picking the tune, rendering ahead, keeping time with the piano |
| `hum/` | the voice engine and its head, built by `hum/build.sh` from a CHIMERA checkout (`hum/src/` is the glue; `head.js`, `worker.js` and `chimera.wasm` are build output) |
| `pieces/` | the performances as MIDI, with `index.csv` mapping each file back to its MAESTRO name |
| `tools/build_library.py` | rebuilds `library.js` and `pieces/` from the dataset; the “Well known” shelf is a list of patterns at its top |

## Credits and licences

- **The piano, the sonata and the original page** are by [kishida](https://github.com/kishida). The upstream repository states
  no licence, so that work remains theirs. It is included here with credit, and will be changed or taken down if they ask.
- **The performances** are from the [MAESTRO dataset](https://magenta.tensorflow.org/datasets/maestro) v3.0.0, licensed
  [CC BY-NC-SA 4.0](pieces/LICENSE): non-commercial use, with attribution, shared alike. The files are renamed and otherwise
  untouched; the page trims the silence before the first note when it loads one.
  Curtis Hawthorne, Andriy Stasyuk, Adam Roberts, Ian Simon, Cheng-Zhi Anna Huang, Sander Dieleman, Erich Elsen, Jesse Engel
  and Douglas Eck. “Enabling Factorized Piano Music Modeling and Generation with the MAESTRO Dataset.” ICLR 2019.
- **The humming voice** is the [CHIMERA vocal synth](https://github.com/jamesondh/chimera-vocal-synth) by Jameson Hodge,
  MIT ([licence](hum/LICENSE-chimera)), built from the revision in `hum/CHIMERA-REVISION` of
  [spirosrap/chimera-song-mouth](https://github.com/spirosrap/chimera-song-mouth). Its head is drawn with
  [three.js](https://threejs.org) (MIT), which is bundled into `hum/head.js`.
- **The additions in this repository** (the library, the queue, the hum-along glue, the English text, the build scripts) are free to reuse.
