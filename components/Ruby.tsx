import React from 'react';
import { ct } from '../scripts/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  ruby?: string
}

const Ruby = ({ ruby = "", className, children }: Props) => {
  return (
    <div className={ct(className)}>
      <ruby>
        {children}
        <rp>(</rp>
        <rt>{ruby}</rt>
        <rp>)</rp>
      </ruby>
    </div>
  );
}

export default Ruby;
