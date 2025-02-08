import * as Tooltip from '@radix-ui/react-tooltip'
import React, { ReactNode } from 'react'

type Props = {
  label?: ReactNode
  content?: ReactNode
  isOpen?: boolean
  onOpenChange?: () => any
}

const TheTooltip = ({ isOpen, onOpenChange, label, content }: Props) => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root open={isOpen} onOpenChange={onOpenChange}>
        <Tooltip.Trigger asChild>{label}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={6}>
            {content}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default TheTooltip
