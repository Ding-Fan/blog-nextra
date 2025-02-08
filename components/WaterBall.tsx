import React from 'react'

type Props = {
  text?: string | number
  width?: string | number
  height?: string | number
}

const WaterBall = ({ text, width, height }: Props) => {

  const myWidth = width || 'w-[360px]'
  const myHeight = height || 'h-[360px]'


  return (
    <div className='relative'>
      <div className={
        `${myWidth} ${myHeight} circle`
      }>
        <div className="wave">
        </div>
      </div>
      <div className="
        top-0 font-serif
        absolute w-full h-full grid text-red-600
        place-content-center text-2xl">
        {text}
      </div>
    </div>
  )
}

export default WaterBall