import React from "react";
import RichImage, { RichImageProps } from "./RichImage";

interface Props extends RichImageProps { }

const GalleryImage = ({ src, caption }: Props) => {
  return (
    <RichImage
      caption={caption}
      classNameImg="max-h-[70vh]"
      effect="framed"
      src={src}
      loading="lazy"
    />
  );
};

export default GalleryImage;
