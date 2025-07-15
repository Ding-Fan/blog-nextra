"use client";

import React, { ImgHTMLAttributes, useState, useEffect } from "react";
import { getOssUrl, ct } from "../../scripts/utils";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export interface BaseImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isOss?: boolean;
  isProgressive?: boolean;
  thumbnailSrc?: string;
}

// Simple base64 1x1 pixel placeholder
const PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const BaseImage = ({ 
  isOss = false, 
  isProgressive = false, 
  thumbnailSrc, 
  src, 
  className,
  ...props 
}: BaseImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(isProgressive ? PLACEHOLDER : (isOss ? getOssUrl(src) : src));
  const [isLoaded, setIsLoaded] = useState(!isProgressive);
  const { isIntersecting, targetRef } = useIntersectionObserver<HTMLImageElement>({ threshold: 0.1 });

  // Progressive loading when in viewport
  useEffect(() => {
    if (!isProgressive || !isIntersecting) return;

    const loadImage = (imageSrc: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setCurrentSrc(imageSrc);
          resolve();
        };
        img.onerror = reject;
        img.src = imageSrc;
      });
    };

    const progressiveLoad = async () => {
      try {
        const finalSrc = isOss ? getOssUrl(src) : src;
        const finalThumbnailSrc = thumbnailSrc && isOss ? getOssUrl(thumbnailSrc) : thumbnailSrc;
        
        // First try thumbnail if provided
        if (finalThumbnailSrc) {
          await loadImage(finalThumbnailSrc);
        }
        
        // Then load full image
        await loadImage(finalSrc);
        setIsLoaded(true);
      } catch (error) {
        // If full image fails, fallback to thumbnail or keep current
        const finalThumbnailSrc = thumbnailSrc && isOss ? getOssUrl(thumbnailSrc) : thumbnailSrc;
        if (finalThumbnailSrc && currentSrc === PLACEHOLDER) {
          try {
            await loadImage(finalThumbnailSrc);
          } catch {
            // Keep placeholder if everything fails
          }
        }
      }
    };

    progressiveLoad();
  }, [isProgressive, isIntersecting, src, thumbnailSrc, isOss, currentSrc]);

  return (
    <img 
      {...props}
      ref={isProgressive ? targetRef : undefined}
      src={currentSrc}
      className={ct(
        className,
        isProgressive && !isLoaded && currentSrc !== PLACEHOLDER ? 'blur-sm' : '',
        isProgressive && currentSrc === PLACEHOLDER ? 'bg-gray-200' : ''
      )}
    />
  );
};

export default BaseImage;
