import React from 'react'
import styles from './App.module.scss'
import Instrument from '~/components/instrument/Instrument'
import { InstrumentType } from '~/enum/enum'
import '~/assets/scss/util.scss'
import Problem from '~/components/problem/Problem'
import { atom, RecoilRoot } from 'recoil'

export const problemState = atom({
  key: 'problem',
  default: { key: '', signature: '', distance: 0 },
})

function App() {
  return (
    <div className={styles.wrap}>
      <RecoilRoot>
        <button type="button" className={styles.start}>
          시작
        </button>
        <div className={styles.instrument}>
          <Instrument type={InstrumentType.Guitar} />
        </div>
        <div className={styles.problem}>
          <Problem />
        </div>
      </RecoilRoot>
    </div>
  )
}

export default App
