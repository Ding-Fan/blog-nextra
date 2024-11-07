// PromptCard.tsx
import React from "react";
import { ct } from "../scripts/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const PromptCard = ({ title, description, className, children }: Props) => {
  return (
    <div className={ct("relative", className)}>
      {/* Title Section */}
      <div
        className="pt-4 font-bold text-2xl"
      >
        <div className="flex items-center">
          <span>{title}</span>
        </div>
      </div>
      {/* Description Section */}
      {description && (
        <div
          className="pb-2"
        >
          <div className="flex items-center font-normal text-base">
            <span>{description}</span>
          </div>
        </div>
      )}

      {/* Content Section */}
        <div className="">{children}</div>
    </div>
  );
};

export default PromptCard;
