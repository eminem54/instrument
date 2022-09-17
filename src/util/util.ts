import { Signature, Key, KeyValue, SignatureValue } from '~/data/data'

export function getProblem() {
  const selectedKey: string = Key[getRandNum(3) % Key.length]
  const selectedSignature: string = Signature[getRandNum(3) % Signature.length]
  const value = selectedSignature === '' ? 0 : SignatureValue[selectedSignature]
  const distance = KeyValue[selectedKey] + value
  return { key: selectedKey, signature: selectedSignature, distance }
}

function getRandNum(n: number) {
  return Math.floor(Math.random() * Math.pow(10, n))
}

export function checkAnswer(answer: number, choice: number) {
  if (answer % 12 === choice % 12) {
    return true
  }
  return false
}
