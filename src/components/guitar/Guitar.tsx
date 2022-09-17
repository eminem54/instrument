import React from 'react'
import styles from './Guitar.module.scss'
import Fret from './Fret'

const fretArray = [
  [
    { lineNum: 1, fret: 0, note: 'E', distance: 34 },
    { lineNum: 1, fret: 1, note: 'F', distance: 35 },
    { lineNum: 1, fret: 2, note: 'F#', distance: 36 },
    { lineNum: 1, fret: 3, note: 'G', distance: 37 },
    { lineNum: 1, fret: 4, note: 'G#', distance: 38 },
    { lineNum: 1, fret: 5, note: 'A', distance: 39 },
    { lineNum: 1, fret: 6, note: 'A#', distance: 40 },
    { lineNum: 1, fret: 7, note: 'B', distance: 41 },
    { lineNum: 1, fret: 8, note: 'C', distance: 42 },
    { lineNum: 1, fret: 9, note: 'C#', distance: 43 },
    { lineNum: 1, fret: 10, note: 'D', distance: 44 },
    { lineNum: 1, fret: 11, note: 'D#', distance: 45 },
  ],
  [
    { lineNum: 2, fret: 0, note: 'B', distance: 29 },
    { lineNum: 2, fret: 1, note: 'C', distance: 30 },
    { lineNum: 2, fret: 2, note: 'C#', distance: 31 },
    { lineNum: 2, fret: 3, note: 'D', distance: 32 },
    { lineNum: 2, fret: 4, note: 'D#', distance: 33 },
    { lineNum: 2, fret: 5, note: 'E', distance: 34 },
    { lineNum: 2, fret: 6, note: 'F', distance: 35 },
    { lineNum: 2, fret: 7, note: 'F#', distance: 36 },
    { lineNum: 2, fret: 8, note: 'G', distance: 37 },
    { lineNum: 2, fret: 9, note: 'G#', distance: 38 },
    { lineNum: 2, fret: 10, note: 'A', distance: 39 },
    { lineNum: 2, fret: 11, note: 'A#', distance: 40 },
  ],
  [
    { lineNum: 3, fret: 0, note: 'G', distance: 25 },
    { lineNum: 3, fret: 1, note: 'G#', distance: 26 },
    { lineNum: 3, fret: 2, note: 'A', distance: 27 },
    { lineNum: 3, fret: 3, note: 'A#', distance: 28 },
    { lineNum: 3, fret: 4, note: 'B', distance: 29 },
    { lineNum: 3, fret: 5, note: 'C', distance: 30 },
    { lineNum: 3, fret: 6, note: 'C#', distance: 31 },
    { lineNum: 3, fret: 7, note: 'D', distance: 32 },
    { lineNum: 3, fret: 8, note: 'D#', distance: 33 },
    { lineNum: 3, fret: 9, note: 'E', distance: 34 },
    { lineNum: 3, fret: 10, note: 'F', distance: 35 },
    { lineNum: 3, fret: 11, note: 'F#', distance: 36 },
  ],
  [
    { lineNum: 4, fret: 0, note: 'D', distance: 20 },
    { lineNum: 4, fret: 1, note: 'D#', distance: 21 },
    { lineNum: 4, fret: 2, note: 'E', distance: 22 },
    { lineNum: 4, fret: 3, note: 'F', distance: 23 },
    { lineNum: 4, fret: 4, note: 'F#', distance: 24 },
    { lineNum: 4, fret: 5, note: 'G', distance: 25 },
    { lineNum: 4, fret: 6, note: 'G#', distance: 26 },
    { lineNum: 4, fret: 7, note: 'A', distance: 27 },
    { lineNum: 4, fret: 8, note: 'A#', distance: 28 },
    { lineNum: 4, fret: 9, note: 'B', distance: 29 },
    { lineNum: 4, fret: 10, note: 'C', distance: 30 },
    { lineNum: 4, fret: 11, note: 'C#', distance: 31 },
  ],
  [
    { lineNum: 5, fret: 0, note: 'A', distance: 15 },
    { lineNum: 5, fret: 1, note: 'A#', distance: 16 },
    { lineNum: 5, fret: 2, note: 'B', distance: 17 },
    { lineNum: 5, fret: 3, note: 'C', distance: 18 },
    { lineNum: 5, fret: 4, note: 'C#', distance: 19 },
    { lineNum: 5, fret: 5, note: 'D', distance: 20 },
    { lineNum: 5, fret: 6, note: 'D#', distance: 21 },
    { lineNum: 5, fret: 7, note: 'E', distance: 22 },
    { lineNum: 5, fret: 8, note: 'F', distance: 23 },
    { lineNum: 5, fret: 9, note: 'F#', distance: 24 },
    { lineNum: 5, fret: 10, note: 'G', distance: 25 },
    { lineNum: 5, fret: 11, note: 'G#', distance: 26 },
  ],
  [
    { lineNum: 6, fret: 0, note: 'E', distance: 10 },
    { lineNum: 6, fret: 1, note: 'F', distance: 11 },
    { lineNum: 6, fret: 2, note: 'F#', distance: 12 },
    { lineNum: 6, fret: 3, note: 'G', distance: 13 },
    { lineNum: 6, fret: 4, note: 'G#', distance: 14 },
    { lineNum: 6, fret: 5, note: 'A', distance: 15 },
    { lineNum: 6, fret: 6, note: 'A#', distance: 16 },
    { lineNum: 6, fret: 7, note: 'B', distance: 17 },
    { lineNum: 6, fret: 8, note: 'C', distance: 18 },
    { lineNum: 6, fret: 9, note: 'C#', distance: 19 },
    { lineNum: 6, fret: 10, note: 'D', distance: 20 },
    { lineNum: 6, fret: 11, note: 'D#', distance: 21 },
  ],
]

export default function Guitar() {
  return (
    <div className={styles.wrap}>
      {fretArray.map((line, lineNum) => {
        return (
          <div className={styles.line}>
            {line.map(({ fret, note, distance }, fretNum) => (
              <Fret
                lineNum={lineNum}
                fretNum={fretNum}
                distance={distance}
                note={note}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}
