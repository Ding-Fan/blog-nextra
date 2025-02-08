import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { ct } from '../scripts/utils'

type Props = {
  children: string | number
  className?: string
  noFraction?: boolean
  fractionDigits?: number
  notation?: Intl.NumberFormatOptions['notation']
}

const NumberItem = ({
  notation = 'standard',
  noFraction,
  className = '',
  children,
  fractionDigits = 6,
}: Props) => {
  const [formattedNumber, setFormattedNumber] = useState<any>('')

  useEffect(() => {
    try {
      setFormattedNumber(
        _.toNumber(children).toLocaleString('en', {
          minimumFractionDigits: noFraction ? 0 : fractionDigits,
          maximumFractionDigits: fractionDigits,
          notation,
        })
      )
    } catch (error) {
      console.log('error', error)
      setFormattedNumber(children)
    }

    return () => {}
  }, [children])

  return <span className={ct(className)}>{formattedNumber}</span>
}

export default NumberItem
