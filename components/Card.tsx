import React, { HTMLAttributes, useEffect, useState } from "react";
import { ct } from "../scripts/utils";
import { setTimeout } from "timers";
import { useStore } from "../state";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  flippable?: boolean;
  id?: string;
}

export const ANIMATION_TIME = 300;

const Card: React.FC<CardProps> = ({
  frontContent,
  backContent,
  className,
  flippable = true,
  id,
}) => {
  const flipped = useStore((state) => state.flipped);
  const setFlipped = useStore((state) => state.setFlipped);
  // **Updated Code:** Initialize doAnimation state to false
  const [doAnimation, setDoAnimation] = useState(false);

  // **Updated Code:** Use useEffect to update doAnimation when flipped changes
  useEffect(() => {
    setDoAnimation(true); // Set doAnimation to true when flipped changes
    const timer = setTimeout(() => {
      setDoAnimation(false); // Reset doAnimation after ANIMATION_TIME
    }, ANIMATION_TIME);

    // Cleanup the timer when component unmounts or before next effect runs
    return () => clearTimeout(timer);
  }, [flipped]); // Dependency array includes flipped

  const handleClick = () => {
    if (!flippable) return;
    // **Updated Code:** Removed setDoAnimation from handleClick
    setFlipped(!flipped);
  };

  return (
    <div className={ct("", className)} style={{ perspective: "1000px" }}>
      <div
        className={ct(
          "relative cursor-pointer w-[80vw] md:w-96 h-36 bg-white rounded-lg shadow-xl transition-transform hover:shadow-2xl",
          `duration-${ANIMATION_TIME}`,
          doAnimation && "scale-110",
          flipped && "-rotate-y-180"
        )}
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
            <div className="text-center font-bold text-xl">{frontContent}</div>
            {id && (
              <div className="absolute top-0 left-0 p-2 text-xs">
                {id}
              </div>
            )}
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
