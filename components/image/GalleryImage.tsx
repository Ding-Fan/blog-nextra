import React from "react";
import RichImage, { RichImageProps } from "./RichImage";
import { ct } from "../../scripts/utils";

interface Props extends RichImageProps {
  isProgressive?: boolean;
  thumbnailSrc?: string;
}

const GalleryImage = ({ 
  src, 
  caption, 
  loading = "lazy", 
  className, 
  isProgressive = true, // Default to progressive for galleries
  thumbnailSrc,
  ...props 
}: Props) => {
  return (
    <RichImage
      caption={caption}
      className={ct(className)}
      classNameImg={ct("md:max-h-[70vh] lg:max-h-[60vh]")}
      effect="framed"
      src={src}
      loading={loading}
      isProgressive={isProgressive}
      thumbnailSrc={thumbnailSrc}
      {...props}
    />
  );
};

export default GalleryImage;
