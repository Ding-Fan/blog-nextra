import React from 'react'
import Quiz from './Quiz'
import { Question } from './data/questions'

type Props = {
  questions: Question[]
}

const QuizApp = ({questions}: Props) => {
  return (
    <Quiz questions={questions} />  
  )
}

export default QuizApp