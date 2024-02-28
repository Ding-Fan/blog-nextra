import React, { ReactNode } from "react";
import BaseImage, { BaseImageProps } from "./BaseImage";
import styles from "./RichImage.module.css";

interface RichImageProps extends BaseImageProps {
  effect?: "blur" | "hoverClear";
  caption?: ReactNode;
}

const RichImage = (props: RichImageProps) => {
  let theImage = <BaseImage {...props} />;

  if (props.effect === "blur") {
    theImage = <BaseImage {...props} className={styles.blur} />;
  } else if (props.effect === "hoverClear") {
    theImage = <BaseImage {...props} className={styles.hoverClear} />;
  }

  return (
    <div className="flex flex-col items-center">
      {theImage}
      {props.caption && (
        <div className="mt-2 text-xs text-gray-400 text-center">
          {props.caption}
        </div>
      )}
    </div>
  );
};

export default RichImage;
