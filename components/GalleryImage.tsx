import React from "react";
import RichImage, { RichImageProps } from "./RichImage";
import { ct } from "../scripts/utils";

interface Props extends RichImageProps { }

const GalleryImage = ({ src, caption, loading = "lazy", className }: Props) => {
  return (
    <RichImage
      caption={caption}
      className={ct("md:max-h-[70vh] lg:max-h-[60vh]", className)}
      effect="framed"
      src={src}
      loading={loading}
    />
  );
};

export default GalleryImage;
