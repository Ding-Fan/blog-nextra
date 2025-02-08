"use client";

import * as React from "react";
import Loading from "./Loading";
import { VariantProps, cva } from "class-variance-authority";
import { ct } from "../scripts/utils";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const button = cva("cursor-pointer w-fit flex items-center leading-[1]", {
  variants: {
    visual: {
      default: ["", "bg-bg-primary"],
      outline: ["bg-transparent", "border-2", "border-solid", "border-white"],

      // {
      //   _dark: {
      //     bg: "slate.50",
      //     color: "slate.900",
      //     _hover: {
      //       bg: "slate.800",
      //       color: "slate.100",
      //     },
      //   },
      // },
    },
    hover: {
      highlight: ["hover:brightness-125", "transition-all"],
    },
    size: {
      sm: ["py-1", "px-3"],
      md: ["py-2", "px-6"],
      lg: ["py-3", "px-9"],
    },
    shape: {
      square: ["rounded-none"],
      round: ["rounded-lg"],
      circle: ["rounded-full"],
    },
  },
  defaultVariants: {
    visual: "default",
    size: "md",
    shape: "round",
  },
});

// const defaultButton = cx(css({}), css({}), css({}));
// const destructiveButton = cx(defaultButton, css({}));
// const outlineButton = cx(defaultButton, css({}));
// const subtleButton = cx(defaultButton, css({}));
// const ghostButton = cx(defaultButton, css({}));

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { className, isLoading, children, visual, hover, size, shape, ...props },
    ref
  ) => {
    return (
      <button
      ref={ref}
        className={ct(
          button({
            visual,
            hover,
            size,
            shape,
          }),
          className
        )}
        disabled={isLoading || props.disabled}
        aria-busy={isLoading ? true : undefined}
        {...props}
      >
        {isLoading ? <Loading className="h-4 w-4" /> : children}
      </button>
    );
  }
);

BaseButton.displayName = 'BaseButton';

export default BaseButton;
