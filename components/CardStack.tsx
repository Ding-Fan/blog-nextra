"use client";

import React, { useState } from "react";
import Card from "./Card"; // Adjust the import path according to your project structure
import { ct } from "../scripts/utils";

const CardStack: React.FC = () => {
  const [isSwipedDown, setIsSwipedDown] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);

  // Sample cards data
  const cards = [
    { frontContent: "Card 1 Front", backContent: "Card 1 Back" },
    { frontContent: "Card 2 Front", backContent: "Card 2 Back" },
    { frontContent: "Card 3 Front", backContent: "Card 3 Back" },
  ];

  // Handle mouse events for swipe detection
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartY(e.clientY);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (startY !== null) {
      const endY = e.clientY;
      if (endY - startY > 50) {
        // Swiped down
        setIsSwipedDown(true);
      }
      setStartY(null);
    }
  };

  // Handle touch events for swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startY !== null) {
      const endY = e.changedTouches[0].clientY;
      if (endY - startY > 50) {
        // Swiped down
        setIsSwipedDown(true);
      }
      setStartY(null);
    }
  };

  return (
    <div
      className="relative"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`relative transition-transform duration-500 ${
          isSwipedDown ? "-rotate-x-45" : "rotate-x-0"
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            className={ct(
              "absolute ",
              ` translate-y-${index * 10}  z-[${
                cards.length - index
              }0]`
            )}
            frontContent={card.frontContent}
            backContent={card.backContent}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
