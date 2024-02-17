import React, { ImgHTMLAttributes } from "react";

export interface BaseImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const BaseImage = ({
  className = "",
  src = "",
  alt = "",
  ...props
}: BaseImageProps) => {
  return <img className={className} src={src} alt={alt} {...props} />;
};

export default BaseImage;
