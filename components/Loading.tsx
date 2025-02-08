'use client';

import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ct } from '../scripts/utils';


export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
};

const Loading: React.FC<LoadingProps> = ({ size = 'md', className, ...props }) => {
  const sizeClass = sizeClasses[size];

  return (
    <div {...props} className={ct('flex h-full w-full items-center justify-center', className)}>
      <FontAwesomeIcon
        className={ct('animate-spin text-blue-100', sizeClass)}
        icon={faSpinner}
      />
    </div>
  );
};

export default Loading;
