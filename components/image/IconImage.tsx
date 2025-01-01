import React from "react";
import BaseImage, { BaseImageProps } from "./BaseImage";

export interface IconImageProps extends BaseImageProps {
  iconStyle?: "contained" | "rounded" | "circle";
}

const IconImage = ({
  iconStyle = "contained",
  className,
  ...props
}: IconImageProps) => {
  let modifiedClassName = className;
  if (iconStyle === "contained") {
    modifiedClassName = `${modifiedClassName} max-h-full max-w-full object-contain`;
  }

  return <BaseImage className={modifiedClassName} {...props} />;
};

export default IconImage;
