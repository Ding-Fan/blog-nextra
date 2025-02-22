"use client";
import React, { useRef } from "react";
import { stagger, useInView } from "framer-motion";

export type Directions =
  | "up"
  | "down"
  | "left"
  | "right"
  | "upLeft"
  | "upRight"
  | "downLeft"
  | "downRight";

type Props = {
  direction?: Directions;
  children: React.ReactNode;
  once?: boolean;
  delay?: number; // New delay prop in seconds
};

const FadeIn = ({
  children,
  direction = "right",
  once = false,
  delay = 0.3,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // use animate in use effect to do it

  const getTransition = () =>
    `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`;

  const commonProperties = {
    transition: getTransition(),
    opacity: isInView ? 1 : 0,
  };

  const fadeIn = {
    up: {
      transform: isInView ? "translateY(0px)" : "translateY(30px)",
      ...commonProperties,
    },
    down: {
      transform: isInView ? "translateY(0px)" : "translateY(-30px)",
      ...commonProperties,
    },
    left: {
      transform: isInView ? "translateX(0px)" : "translateX(30px)",
      ...commonProperties,
    },
    right: {
      transform: isInView ? "translateX(0px)" : "translateX(-30px)",
      ...commonProperties,
    },
    upLeft: {
      transform: isInView
        ? "translateX(0px) translateY(0px)"
        : "translateX(30px) translateY(30px)",
      ...commonProperties,
    },
    upRight: {
      transform: isInView
        ? "translateX(0px) translateY(0px)"
        : "translateX(-30px) translateY(30px)",
      ...commonProperties,
    },
    downLeft: {
      transform: isInView
        ? "translateX(0px) translateY(0px)"
        : "translateX(30px) translateY(-30px)",
      ...commonProperties,
    },
    downRight: {
      transform: isInView
        ? "translateX(0px) translateY(0px)"
        : "translateX(-30px) translateY(-30px)",
      ...commonProperties,
    },
  };

  return (
    <div ref={ref} style={fadeIn[direction]}>
      {children}
    </div>
  );
};

export default FadeIn;
