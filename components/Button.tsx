import React from "react";
import { ct } from "../scripts/utils";
import BaseButton, { BaseButtonProps } from "./BaseButton";

type ButtonNames = "default" | "secondary" | "hero" | "createList" | "primary";

interface ButtonProps extends BaseButtonProps {
  name?: ButtonNames;
}

const Button = ({ className, name = "default", ...props }: ButtonProps) => {
  // const themeColor = "stone-800"; // this will not be recognized because tree shaking
  const themeColor = {
    stone: {
      bg: "bg-stone-800",
      text: "text-stone-800",
      border: "border-stone-800",
    },
  };
  const buttonProps: Record<ButtonNames, BaseButtonProps> = {
    default: {},
    primary: {
      className: ct(
        `flex justify-center items-center py-2 px-4 md:px-8 text-[18px] transition-all duration-250 ease-in-out w-full text-white `,
        themeColor.stone.bg
      ),
      hover: "highlight",
    },
    hero: {
      className:
        "flex md:justify-center items-center py-2 px-8 h-12 text-[18px] transition-all duration-250 ease-in-out",
    },
    createList: {
      className:
        "bg-[#12b886] font-main-text text-[18px] mb-2 md:mb-5 mt-5 flex justify-center",
      hover: "highlight",
    },
    secondary: {
      className: ct(
        `flex justify-center items-center py-2 px-8 text-[18px] transition-all duration-250 ease-in-out w-full border border-solid `,
        themeColor.stone.text,
        themeColor.stone.border
      ),
      hover: "highlight",
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
