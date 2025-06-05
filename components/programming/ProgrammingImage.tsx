"use client";

import React from "react";
import { ct } from "../../scripts/utils";
import RichImage, { RichImageProps } from "../image/RichImage";

export interface ProgrammingImageProps extends Omit<RichImageProps, 'caption'> {
  caption: string; // Make caption required for programming images
  isOss?: boolean; // Override to default to true
}

const ProgrammingImage = ({
  isOss = true,
  className,
  caption,
  align = "center",
  effect,
  ...props
}: ProgrammingImageProps) => {
  return (
    <RichImage
      isOss={isOss}
      caption={caption}
      align={align}
      effect={effect}
      className={ct("w-full md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-screen-md my-4", className)}
      {...props}
    />
  );
};

export default ProgrammingImage;