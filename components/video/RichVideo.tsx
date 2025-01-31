import React, { ReactNode } from "react";
import BaseVideo, { BaseVideoProps } from "./BaseVideo";
import styles from "./RichVideo.module.css"; // Create this CSS module or rename accordingly
import Caption from "../Caption";
import { ct } from "../../scripts/utils";

export interface RichVideoProps extends BaseVideoProps {
  /**
   * Optional effect for styling the video container:
   *  - "blur": Adds a blur effect
   *  - "hoverClear": Clears on hover
   *  - "framed": Adds borders, shadows, etc.
   */
  effect?: "blur" | "hoverClear" | "framed";
  /**
   * Caption can be a string or any React node.
   */
  caption?: ReactNode;
  /**
   * Align the video (and caption) "center" or "left".
   */
  align?: "center" | "left";
  /**
   * Additional classes specifically for the BaseVideo element.
   */
  classNameVideo?: string;
  /**
   * Additional classes for the outer container.
   */
  className?: string;
}

const RichVideo = ({
  effect,
  caption,
  align = "center",
  className,
  classNameVideo,
  ...props
}: RichVideoProps) => {
  // Default video without effect
  let theVideo = (
    <BaseVideo className={ct(styles.baseVideo, classNameVideo)} {...props} />
  );

  // Adjust theVideo based on the effect
  if (effect === "blur") {
    theVideo = (
      <BaseVideo
        {...props}
        className={ct(styles.baseVideo, styles.blur, classNameVideo)}
      />
    );
  } else if (effect === "hoverClear") {
    theVideo = (
      <BaseVideo
        {...props}
        className={ct(styles.hoverClear, classNameVideo)}
      />
    );
  } else if (effect === "framed") {
    theVideo = (
      <BaseVideo
        {...props}
        className={ct(
          "p-1 shadow-[1px_1px_3px_rgba(0,0,0,0.2)] border border-black bg-stone-50",
          styles.baseVideo,
          classNameVideo
        )}
      />
    );
  }

  // Determine alignment classes
  let alignClass = "";
  if (align === "center") {
    alignClass = "flex flex-col items-center";
  } else if (align === "left") {
    alignClass = "flex flex-col items-start";
  }

  return (
    <div className={ct(alignClass, className)}>
      {theVideo}
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
};

export default RichVideo;
