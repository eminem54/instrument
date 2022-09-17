import { KeyType, SignatureType } from '~/type/type'

export const Signature = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '#',
  '##',
  'b',
  'bb',
  'bbb',
]
export const SignatureSet = new Set(Signature)

export const Key = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
export const KeySet = new Set(Key)

export const KeyValue: KeyType = {
  E: 10,
  F: 11,
  G: 13,
  A: 15,
  B: 17,
  C: 18,
  D: 20,
}

export const SignatureValue: SignatureType = {
  '#': 1,
  '##': 2,
  b: -1,
  bb: -2,
  bbb: -3,
}
