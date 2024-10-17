'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { ct } from '../scripts/utils';

export interface BaseTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textStyle> {}

const textStyle = cva('', {
  variants: {
    visual: {},
    textCase: {
      upper: ['uppercase'],
      lower: ['lowercase'],
      capital: ['capitalize'],
      normal: ['normal-case'],
    },
  },
  defaultVariants: {
    // visual: "h1",
    textCase: 'normal',
  },
});

const BaseText: React.FC<BaseTextProps> = ({
  className,
  visual,
  textCase,
  children,
  ...props
}) => {
  return (
    <span className={ct(textStyle({ visual, textCase }), className)} {...props}>
      {children}
    </span>
  );
};

export default BaseText;
