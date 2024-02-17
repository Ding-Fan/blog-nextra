import React from "react";
import BaseImage, { BaseImageProps } from "./BaseImage";
import styles from "./RichImage.module.css";

interface RichImageProps extends BaseImageProps {
  effect?: "blur" | "hoverClear";
}

const RichImage = (props: RichImageProps) => {
  if (props.effect === "blur") {
    return <BaseImage {...props} className={styles.blur} />;
  } else if (props.effect === "hoverClear") {
    return <BaseImage {...props} className={styles.hoverClear} />;
  }

  return <BaseImage {...props} />;
};

export default RichImage;
