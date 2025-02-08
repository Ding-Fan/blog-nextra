import React from 'react'
import * as Progress from '@radix-ui/react-progress'
import { ct } from '../scripts/utils'

type Props = {
  percent: number
  className?: string
  size?: 'small' | 'medium'
}

const TheProgress = ({ size = 'small', className = '', percent }: Props) => {
  return (
    <Progress.Root
      className={ct(
        'overflow-hidden rounded-full bg-sumi-200',
        size === 'small' ? 'h-2' : '',
        size === 'medium' ? 'h-4' : '',
        className
      )}
      value={percent}
    >
      <Progress.Indicator
        className="h-full w-full rounded-full bg-primary transition-all"
        style={{
          transform: `translateX(-${100 - percent}%)`,
        }}
      />
    </Progress.Root>
  )
}

export default TheProgress
