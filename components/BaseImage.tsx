import React, { ImgHTMLAttributes } from "react";

export interface BaseImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const BaseImage = ({ ...props }: BaseImageProps) => {
  return <img {...props} />;
};

export default BaseImage;
