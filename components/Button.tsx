import React from "react";
import { ct } from "../scripts/utils";
import BaseButton, { BaseButtonProps } from "./BaseButton";

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "ghost"
  | "hero"
  | "createList";

interface ButtonProps extends BaseButtonProps {
  /**
   * The visual variant of the button
   * @default "default"
   */
  variant?: ButtonVariant;
  /**
   * Optional color theme for the button
   * @default "stone"
   */
  color?: "stone" | "blue" | "green";
}
// const themeColor = "stone-800"; // this will not be recognized because
// tree shaking
const themeColors = {
  stone: {
    bg: "bg-stone-800",
    text: "text-stone-800",
    border: "border-stone-800",
    hover: {
      primary: "hover:bg-stone-700",
      secondary: "hover:bg-stone-100",
      ghost: "hover:bg-stone-800 hover:text-white",
    },
  },
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-600",
    hover: {
      primary: "hover:bg-blue-700",
      secondary: "hover:bg-blue-50",
      ghost: "hover:bg-blue-600 hover:text-white",
    },
  },
  green: {
    bg: "bg-green-600",
    text: "text-green-600",
    border: "border-green-600",
    hover: {
      primary: "hover:bg-green-700",
      secondary: "hover:bg-green-50",
      ghost: "hover:bg-green-600 hover:text-white",
    },
  },
} as const;

const baseStyles = {
  all: "flex justify-center items-center py-2 px-2 lg:px-6 text-[18px] transition-all duration-250 ease-in-out",
  focus: "focus:outline-none focus:ring-2 focus:ring-offset-2",
} as const;

const Button = ({
  className,
  variant = "default",
  color = "stone",
  ...props
}: ButtonProps) => {
  const buttonStyles: Record<ButtonVariant, BaseButtonProps> = {
    default: {
      className: ct(baseStyles.all, baseStyles.focus),
    },
    primary: {
      className: ct(
        baseStyles.all,
        baseStyles.focus,
        "w-full text-white",
        themeColors[color].bg,
        themeColors[color].hover.primary
      ),
    },
    ghost: {
      className: ct(
        baseStyles.all,
        baseStyles.focus,
        "bg-transparent",
        "border",
        themeColors[color].text,
        themeColors[color].border,
        themeColors[color].hover.ghost,
        "hover:border-transparent"
      ),
    },
    hero: {
      className: ct(
        baseStyles.all,
        baseStyles.focus,
        "h-12 md:justify-center",
        themeColors[color].bg,
        themeColors[color].hover.primary
      ),
    },
    createList: {
      className: ct(
        baseStyles.all,
        baseStyles.focus,
        "bg-[#12b886] font-main-text mb-2 md:mb-5 mt-5 text-white",
        "hover:bg-[#0ca678]"
      ),
    },
    secondary: {
      className: ct(
        baseStyles.all,
        baseStyles.focus,
        "w-full border border-solid",
        themeColors[color].text,
        themeColors[color].border,
        themeColors[color].hover.secondary
      ),
    },
  };

  return (
    <BaseButton
      {...buttonStyles[variant]}
      {...props}
      className={ct(buttonStyles[variant].className, className)}
    />
  );
};

export default Button;
