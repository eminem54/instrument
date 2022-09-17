import React, { useState, useEffect } from 'react'
import styles from './Fret.module.scss'
import { useRecoilState } from 'recoil'
import { problemState } from '~/App'
import { getProblem, checkAnswer } from '~/util/util'

type Props = {
  lineNum: number
  fretNum: number
  note: string
  distance: number
}

export default function Fret({ lineNum, fretNum, note, distance }: Props) {
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const [problem, setProblem] = useRecoilState(problemState)
  const markCondition = lineNum === 5 && fretNum % 2 === 1
  const lineCondition = fretNum === 0

  useEffect(() => {
    setTimeout(() => {
      if (isPressed) setIsPressed(false)
    }, 1000)
  }, [isPressed])
  return (
    <button
      type="button"
      aria-pressed={isPressed}
      className={styles.fret}
      onClick={() => {
        setIsPressed(!isPressed)
        if (checkAnswer(problem.distance, distance)) {
          setProblem(getProblem())
        }
      }}
    >
      {note}
      {markCondition && <span className={styles.mark}></span>}
      {lineCondition && <span className={styles.line}>{lineNum + 1}</span>}
    </button>
  )
}
