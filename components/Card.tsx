import React, { HTMLAttributes, useState } from "react";
import { ct } from "../scripts/utils";

interface CardProps extends HTMLAttributes<HTMLElement> {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ frontContent, backContent, className }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={ct("", className)}
      style={{ perspective: "1000px" }}
    >
      <div
        className={ct("relative w-60 h-36 bg-white rounded-lg shadow-xl transition-transform duration-500 hover:shadow-2xl hover:scale-105", flipped && "-rotate-y-180")}
        onClick={handleClick}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front of the card */}
        <div
          className="absolute w-full h-full rotate-y-0"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="flex justify-center items-center h-full  rounded-lg p-5">
            <div className="text-center font-bold text-xl">
              {frontContent}
            </div>
          </div>
        </div>
        {/* Back of the card */}
        <div
          className="absolute w-full h-full rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="flex justify-center items-center h-full bg-gray-800 rounded-lg p-5">
            <div className="text-center text-white font-bold text-xl">
              {backContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
