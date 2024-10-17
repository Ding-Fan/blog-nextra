'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { ct } from '../scripts/utils';

export interface BaseHeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingStyle> {}

const headingStyle = cva('relative z-10', {
  variants: {
    visual: {
      h1: ['text-3xl', 'mb-5'],
      h2: ['text-2xl', 'mb-4'],
      h3: ['text-xl', 'mb-3'],
    },
    textCase: {
      upper: ['uppercase'],
      lower: ['lowercase'],
      capital: ['capitalize'],
      normal: ['normal-case'],
    },
  },
  defaultVariants: {
    visual: 'h1',
    textCase: 'normal',
  },
});

const BaseHeading: React.FC<BaseHeadingProps> = ({
  className,
  visual,
  textCase,
  children,
  ...props
}) => {
  return (
    <div
      className={ct(headingStyle({ visual, textCase }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default BaseHeading;
