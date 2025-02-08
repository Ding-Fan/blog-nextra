import React from 'react'
// import { InputProps } from '../types'
import { Utils } from '../utils/utils'
import Input from './Input'

type InputNumberProps = {
  // maxLength?: number
} & InputProps

const InputNumber = (props: InputNumberProps) => {
  /**
   *
   * @param nextUserInput input string value
   *
   */
  const enforcer = (nextUserInput: string) => {
    let result = ''

    nextUserInput = nextUserInput.replace(/,/g, '.')

    if (
      nextUserInput === '' ||
      Utils.inputRegex.test(Utils.escapeRegExp(nextUserInput))
    ) {
      result = nextUserInput
    }

    // result = Number(result).toFixed(3)

    // props.onUserInput(result)

    return result
  }

  return (
    <Input
      {...{
        ...props,
        type: 'number',
        placeholder: props.placeholder || '0',
        enforcer,
      }}
    />
  )
}

export default InputNumber
