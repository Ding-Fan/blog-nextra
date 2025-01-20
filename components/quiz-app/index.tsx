import React from 'react'
import Quiz from './Quiz'

type Props = {
  questions: Question[]
}

const QuizApp = ({questions}: Props) => {
  return (
    <Quiz questions={questions} />  
  )
}

export default QuizApp