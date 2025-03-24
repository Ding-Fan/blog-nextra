"use client";

// CardPost.tsx
import React from "react";
import { ct } from "../scripts/utils";
import { Post } from "../data/types";

interface CardPostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post;
  variant?: "default" | "compact";
  showTitle?: boolean;
  className?: string;
}

const CardPost: React.FC<CardPostProps> = ({
  post,
  className,
  variant = "default",
  showTitle = true,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return "p-1";
      default:
        return "p-2";
    }
  };

  const getTitleStyles = () => {
    switch (variant) {
      case "compact":
        return "text-sm";
      default:
        return "text-lg";
    }
  };

  return (
    <div className={ct("relative w-full", getVariantStyles(), className)} {...props}>
      <div className="font-quote-content pt-6">{post.content}</div>
      {/* learn from this */}
      {/* https://mui.com/material-ui/react-text-field/ */}
      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend */}
      <fieldset className="p-2 border border-solid rounded-lg rounded-tl-none border-indigo-900 absolute -top-[10px] left-0 bottom-0 right-0 pointer-events-none">
        {showTitle && (post.author || post.title) && (
          <legend
            className={ct(
              "px-2 font-semibold font-serif text-indigo-900",
              getTitleStyles()
            )}
          >
            {post.author || (post.title as string)?.toUpperCase()}
          </legend>
        )}
      </fieldset>

      {post.description && (
        <div className="mt-2">
          <div className="ml-auto w-fit text-xs text-zinc-400 truncate">
            {post.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPost;
