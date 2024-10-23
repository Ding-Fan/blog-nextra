import React, { ImgHTMLAttributes } from "react";
import { getOssUrl } from "../scripts/utils";

export interface BaseImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isOss?: boolean;
}

const BaseImage = ({ isOss = false, src, ...props }: BaseImageProps) => {
  return <img {...props} src={isOss ? getOssUrl(src) : src} />;
};

export default BaseImage;
