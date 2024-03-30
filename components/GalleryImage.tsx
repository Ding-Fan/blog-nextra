import React from "react";
import RichImage, { RichImageProps } from "./RichImage";

interface Props extends RichImageProps {}

const GalleryImage = ({ src }: Props) => {
  return <RichImage classNameImg="max-h-[70vh]" effect="framed" src={src} />;
};

export default GalleryImage;
