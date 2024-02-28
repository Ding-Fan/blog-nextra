import React, { ReactNode } from "react";
import BaseImage, { BaseImageProps } from "./BaseImage";
import styles from "./RichImage.module.css";

interface RichImageProps extends BaseImageProps {
  effect?: "blur" | "hoverClear";
  caption?: ReactNode;
  align?: "center" | "left";
}

const RichImage = ({
  effect,
  caption,
  align = "center",
  ...props
}: RichImageProps) => {
  let theImage = <BaseImage {...props} />;

  if (effect === "blur") {
    theImage = <BaseImage {...props} className={styles.blur} />;
  } else if (effect === "hoverClear") {
    theImage = <BaseImage {...props} className={styles.hoverClear} />;
  }

  let alignClass = "";
  if (align === "center") {
    alignClass = "flex flex-col items-center";
  } else if (align === "left") {
    alignClass = "flex flex-col items-start";
  }

  return (
    <div className={alignClass}>
      {theImage}
      {caption && (
        <div className="mt-2 text-xs text-gray-400 text-center">{caption}</div>
      )}
    </div>
  );
};

export default RichImage;
