import React from "react";

export interface BaseVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

const BaseVideo: React.FC<BaseVideoProps> = ({
  src,
  poster,
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  className = "",
}) => {
  return (
    <video
      className={`w-full h-auto rounded-md shadow ${className}`}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={muted}
    />
  );
};

export default BaseVideo;
