export interface Fret {
  line: Number
  fret: Number
  note: String
}

export type ProblemType = {
  key: String
  signature: String
}

export type KeyType = {
  [index: string]: number
  C: number
  D: number
  E: number
  F: number
  G: number
  A: number
  B: number
}

export type SignatureType = {
  [index: string]: number
  '#': number
  '##': number
  b: number
  bb: number
  bbb: number
}
