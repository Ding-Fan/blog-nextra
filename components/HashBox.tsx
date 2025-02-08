import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { MouseEventHandler, useMemo, useState } from 'react'
import { Utils } from '../utils/utils'
import copy from 'copy-to-clipboard'
import type { Address } from 'viem'
import clsx from 'clsx'
import TheTooltip from './TheTooltip'
import _ from 'lodash'

type Props = {
  shorten?: boolean
  text?: Address
  hasCopy?: boolean
  className?: string
}

const HashBox = ({ shorten, text, hasCopy, className = '' }: Props) => {
  const [showCopied, setShowCopied] = useState(false)
  const textV = useMemo(() => {
    let result: string | '-' = text || '-'

    if (shorten && text) {
      result = Utils.shortenAddress(text)
    }

    return result
  }, [text])

  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    // prevent trigger outside behavior like <Link></Link>
    event.stopPropagation()

    if (text) {
      copy(text)
      setShowCopied(true)
    }
  }

  // let 小 = '小'
  // let 周末 = '大周末'
  // let 周五 = 小 + 周末
  // let 周三 = 小 + 周五
  // let 周一 = 小 + 周三
  // console.log(周一)

  // ! don't use the tool tip, use toast instead

  return (
    <div className={clsx('flex items-center', className)}>
      <div className="font-mono text-xs">{textV}</div>
      {text && hasCopy ? (
        <TheTooltip
          isOpen={showCopied}
          onOpenChange={_.debounce(() => {
            if (showCopied) {
              setTimeout(() => {
                setShowCopied(false)
              }, 1000)
            }
          }, 700)}
          label={
            <div
              className="ml-2 cursor-pointer text-blue-200"
              onClick={onClick}
            >
              <FontAwesomeIcon icon={faCopy} />
            </div>
          }
          content={'Copied!'}
        />
      ) : null}
    </div>
  )
}

export default HashBox
