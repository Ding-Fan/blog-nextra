import React, { useState } from 'react'
import { ct } from '../scripts/utils'

type Props = {
  progress: number
  radius: number
  className?: string
}

const TheProgressCircle = ({ className = '', progress, radius }: Props) => {
  const [strokeDashoffset, setStrokeDashoffset] = useState(0)
  const circumference = 2 * Math.PI * radius

  // Calculate the stroke-dashoffset value for the progress circle
  const calcStrokeDashoffset = () => {
    return circumference - (progress / 100) * circumference
  }

  // Update the stroke-dashoffset value when the progress changes
  React.useEffect(() => {
    setStrokeDashoffset(calcStrokeDashoffset())
  }, [progress])

  return (
    <div className={ct('relative', className)}>
      <svg
        // tailwind css will make the circle bigger than svg
        // so we make the svg bigger
        width={`${radius * 2 + 8}px`}
        height={`${radius * 2 + 8}px`}
        className="-rotate-90"
      >
        <circle
          className="stroke stroke-dark/10"
          fill="none"
          cx="50%"
          cy="50%"
          r={radius}
          strokeLinecap="round"
          strokeWidth="2"
          strokeDasharray={circumference}
        />
        <circle
          className="stroke stroke-green-400"
          fill="none"
          cx="50%"
          cy="50%"
          r={radius}
          strokeLinecap="round"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-dark">
        {progress} %
      </div>
    </div>
  )
}

export default TheProgressCircle
