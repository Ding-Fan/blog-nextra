import React, { useEffect, useMemo, useState } from 'react'
import { ct } from '../scripts/utils'
// import { InputProps } from '../types'

const Input = ({
  value,
  onUserInput,
  placeholder = 'input here',
  className = '',
  type = 'text',
  enforcer = (value: string) => value,
  onBlur = () => {},
}: InputProps) => {
  // const [props, setProps] = useState({})

  // useEffect(() => {
  //   let result = {}
  //   switch (type) {
  //     case 'text':
  //       result = {
  //         minLength: 1,
  //         maxLength: 79
  //       }
  //       break
  //     case 'number':
  //       break

  //     default:
  //       break
  //   }

  //   setProps(result)

  //   return () => {

  //   }
  // }, [])

  /**
   *
   * @param event
   *
   * on blur might cause coincidence when click submit button
   */
  const onBlurListener = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    onBlur()
  }

  const props = useMemo(() => {
    let result = {}
    switch (type) {
      case 'text':
        result = {
          minLength: 1,
          maxLength: 79,
        }
        break

      // *  Failed to execute 'setSelectionRange' on 'HTMLInputElement': The input element's type ('number') does not support selection.
      // case 'number':
      //   break

      default:
        break
    }
    return result
  }, [type])

  return (
    <input
      onChange={(event) => {
        const cursorPosition = event.target.selectionStart
        onUserInput(enforcer(event.target.value))
        setTimeout(() => {
          event.target.setSelectionRange(cursorPosition, cursorPosition)
        })
      }}
      onBlur={onBlurListener}
      // universal input options
      // inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      {...{
        type: 'text',
        value,
        placeholder,
        ...props,
      }}
      className={ct(
        'w-full rounded-md bg-white focus:outline-none ',
        className
      )}
    />
  )
}

export default Input
