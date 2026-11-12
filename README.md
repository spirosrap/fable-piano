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
- **The Moonlight Sonata**, all three movements, which the dataset lacks. It is not a recording: the notes come from the
  Mutopia Project's engraved score, and the piano's own performer (the one that plays the “Fable” sonata) plays them, with
  the edition's dynamics, pedalling and tempo written out in `tools/build_scores.py`. The two performer sliders work on it.
  Its finale, the Presto agitato, is also in the library on its own.
- Search by composer or title, browse by composer, a “Well known” shelf, starred pieces and recently played.
- Where a work was recorded more than once, each performance can be chosen by its year.
- Continuous play, shuffle, previous / next. Moving on to the next piece also works while the tab is in the background.
- **Hum along**: a head from the [CHIMERA](https://github.com/jamesondh/chimera-vocal-synth) voice engine hums the tune of
  whatever is playing, on "la", "da", "doo", "na" or "ah", in a high, low or child's voice. The page picks the top line out of
  the piano part, moves it into the singer's range, and has the voice engine render it a few seconds ahead of the music in
  background workers; each stretch then starts on the piano's own audio clock, and the head moves as the engine's mouth did.
- **Goofy and unhinged**: the hummer need not take the job seriously. In these two moods it picks something to do phrase by
  phrase: scat ("doo bee doo bah", "meow meow"), sing words ("I don't know the words", "too many notes") or the composer's
  name, drift flat or sharp, start on the wrong note and fix it, croon, trill, crack, sing it as opera, beatbox, or hold the
  last note far too long. In the rests it laughs, clears its throat, yawns or says something ("wait for it…", "bravo!").
  A caption under the head says what it is up to. "In earnest" is the plain hum.
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
| `engine.js`, `score.js`, `midi.js` | the piano model, the sonata with its performer, and the MIDI reader, from upstream commit [`1123b16`](https://github.com/kishida/webdemos/commit/1123b16140723011a086bb4b4613afebbdbad192). Unchanged except for one added line at the end of `score.js`, which lets other scores use its performer |
| `library.js` | the catalogue, generated |
| `scores/` | pieces played from a score: `src/` the engraved notes (LilyPond's MIDI), `<id>.json` the reading of them, `index.js` their catalogue |
| `tools/build_scores.py` | builds `scores/`; tempo, dynamics by bar, voicing and pedalling of each score are written there |
| `hum.js` | hum-along: picking the tune, the goofy moods (`perform`), rendering ahead, keeping time with the piano |
| `hum/` | the voice engine and its head, built by `hum/build.sh` from a CHIMERA checkout (`hum/src/` is the glue, `render.ts` there turns a list of notes into sound; `head.js`, `worker.js` and `chimera.wasm` are build output) |
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
- **The Moonlight Sonata's score** is from the [Mutopia Project](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=276)
  (Mutopia-2007/02/11-276), typeset by Chris Sawer and Stewart Holmes from the Berners edition of 1908, licensed
  [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). `scores/src/moonlight*.mid` are its files as published;
  `scores/moonlight.json` is derived from them (first ending left out, da capo added, dynamics, pedal and tempo added) and
  is under the same licence.
- **The humming voice** is the [CHIMERA vocal synth](https://github.com/jamesondh/chimera-vocal-synth) by Jameson Hodge,
  MIT ([licence](hum/LICENSE-chimera)), built from the revision in `hum/CHIMERA-REVISION` of
  [spirosrap/chimera-song-mouth](https://github.com/spirosrap/chimera-song-mouth). Its head is drawn with
  [three.js](https://threejs.org) (MIT), which is bundled into `hum/head.js`.
- **The additions in this repository** (the library, the queue, the hum-along glue, the English text, the build scripts) are free to reuse.
