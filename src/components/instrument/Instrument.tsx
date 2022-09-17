import { DiffieHellmanGroup } from 'crypto'
import React from 'react'
import { InstrumentType } from '~/enum/enum'
import Guitar from '~/components/guitar/Guitar'

type Props = {
  type: InstrumentType
}

export default function Instrument({ type }: Props) {
  switch (type) {
    case InstrumentType.Guitar:
      return <Guitar />

    default:
      return <span>hello</span>
  }
}
