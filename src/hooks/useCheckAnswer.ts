import { useRecoilState } from 'recoil'
import { problemState } from '~/App'

type AnswerProps = {
  clickedValue: Number
}

export function checkAnswer({ clickedValue }: AnswerProps) {
  const [problem, setProblem] = useRecoilState(problemState)
}
