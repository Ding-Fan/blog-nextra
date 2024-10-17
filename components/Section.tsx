import React from 'react';
import { ct } from '../scripts/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center';
}

const Section = ({ className, children, align = 'left' }: SectionProps) => {
  const mainStyles = {
    left: 'z-10 relative mt-10 md:mt-0 md:min-h-screen flex flex-col justify-center mb-24 md:mb-0',
    center:
      'z-10 relative mt-10 md:mt-0 md:min-h-screen flex flex-col justify-center items-center mb-24 md:mb-0',
  };

  return <div className={ct(mainStyles[align], className)}>{children}</div>;
};

export default Section;
