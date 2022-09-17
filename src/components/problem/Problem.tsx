import React, { useEffect } from 'react'
import styles from './Problem.module.scss'
import { useRecoilState } from 'recoil'
import { getProblem } from '~/util/util'
import { problemState } from '~/App'

export default function Problem() {
  const [problem, setProblem] = useRecoilState(problemState)

  useEffect(() => {
    setProblem(getProblem())
  }, [setProblem])

  useEffect(() => {}, [problem])
  return (
    <div className={styles.wrap}>
      <div className={styles.problem}>
        <span className={styles.key}>{problem.key}</span>
        <span className={styles.signature}>{problem.signature}</span>
      </div>
    </div>
  )
}
