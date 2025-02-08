import _ from 'lodash'
import React, { useMemo, useState } from 'react'
import NumberItem from './NumberItem'
import TheProgress from './TheProgress'
import TheTooltip from './TheTooltip'

type Props = {
  value: number | string
  base: number | string
  type?: 'leaderboard'
}

const ProgressWithLabel = ({ type, value = 1, base = 1 }: Props) => {
  const percent = useMemo(() => {
    let result = _.divide(
      _.multiply(_.ceil(_.toNumber(value)), 100),
      _.ceil(_.toNumber(base))
    )

    // keep in under 100 to prevent warning
    return Math.min(100, result)
  }, [value, base])

  return (
    <div className="">
      <div className="flex">
        <NumberItem className="mr-1">{value}</NumberItem>
        {type === 'leaderboard' ? (
          <TheTooltip
            label={
              <div className="text-text-gray">
                (
                {_.ceil(
                  _.divide(
                    _.multiply(_.toNumber(value), 100),
                    _.toNumber(base)
                  ),
                  2
                )}
                %)
              </div>
            }
            content={
              <div className="">
                Total Coinbase Reward /current Credits For Testnet3
              </div>
            }
          />
        ) : (
          <div className="text-text-gray">
            (
            {_.ceil(
              _.divide(_.multiply(_.toNumber(value), 100), _.toNumber(base)),
              2
            )}
            %)
          </div>
        )}
      </div>

      <TheProgress percent={percent} />
    </div>
  )
}

export default ProgressWithLabel
