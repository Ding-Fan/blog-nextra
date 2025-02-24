"use client";

import React, { ReactNode } from "react";
import BaseImage, { BaseImageProps } from "./BaseImage";
import styles from "./RichImage.module.css";
import Caption from "../Caption";
import { ct } from "../../scripts/utils";

export interface RichImageProps extends BaseImageProps {
  effect?: "blur" | "hoverClear" | "framed";
  caption?: ReactNode;
  align?: "center" | "left";
  classNameImg?: string;
}

const RichImage = ({
  effect,
  caption,
  align = "center",
  className,
  classNameImg,
  ...props
}: RichImageProps) => {
  let theImage = (
    <BaseImage className={ct(styles.baseImage, classNameImg)} {...props} />
  );

  if (effect === "blur") {
    theImage = (
      <BaseImage
        {...props}
        className={ct(styles.baseImage, styles.blur, classNameImg)}
      />
    );
  } else if (effect === "hoverClear") {
    theImage = (
      <BaseImage {...props} className={ct(styles.hoverClear, classNameImg)} />
    );
  } else if (effect === "framed") {
    theImage = (
      <BaseImage
        {...props}
        className={ct(
          "p-1 shadow-[1px_1px_3px_rgba(0,0,0,0.2)]  bg-stone-50",
          styles.baseImage,
          classNameImg
        )}
      />
    );
  }

  let alignClass = "";
  if (align === "center") {
    alignClass = "flex flex-col items-center";
  } else if (align === "left") {
    alignClass = "flex flex-col items-start";
  }

  return (
    <div className={ct(alignClass, className)}>
      {theImage}
      {caption && <Caption children={caption} />}
    </div>
  );
};

export default RichImage;
