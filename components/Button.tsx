import React from 'react';
import { ct } from '../scripts/utils';
import BaseButton, { BaseButtonProps } from './BaseButton';
// import { BaseButton, BaseButtonProps } from "./ui";
// import { ct } from "../utils/utils";

type ButtonNames = 'default' | 'secondary' | 'hero' | 'createList' | 'primary';

interface ButtonProps extends BaseButtonProps {
  name?: ButtonNames;
}

const Button = ({ className, name = 'default', ...props }: ButtonProps) => {
  const buttonProps: Record<ButtonNames, BaseButtonProps> = {
    default: {},
    primary: {
      className:
        'flex justify-center items-center py-2 px-8 h-12 text-[18px] transition-all duration-250 ease-in-out w-full bg-teal-800 text-white',
      hover: 'highlight',
    },
    hero: {
      className:
        'flex md:justify-center items-center py-2 px-8 h-12 text-[18px] transition-all duration-250 ease-in-out',
    },
    createList: {
      className:
        'bg-[#12b886] font-main-text text-[18px] mb-2 md:mb-5 mt-5 flex justify-center',
      hover: 'highlight',
    },
    secondary: {
      className:
        'flex justify-center items-center py-2 px-8 h-12 text-[18px] transition-all duration-250 ease-in-out w-full text-teal-800 border border-solid border-teal-800',
      hover: 'highlight',
    },
  };

  return (
    <BaseButton
      {...buttonProps[name]}
      {...props}
      // to override className above
      className={ct(buttonProps[name].className, className)}
    />
  );
};

export default Button;
