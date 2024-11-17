import React from "react";
import RichImage, { RichImageProps } from "./RichImage";
import { ct } from "../scripts/utils";

interface Props extends RichImageProps { }

const GalleryImage = ({ src, caption, loading = "lazy", className }: Props) => {
  return (
    <RichImage
      caption={caption}
      className={className}
      effect="framed"
      src={src}
      loading={loading}
    />
  );
};

export default GalleryImage;
