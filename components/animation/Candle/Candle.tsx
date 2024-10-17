import React, { useEffect, useRef } from "react";
import "./candle.module.css";

interface CandlesProps {
  count?: number;
}

const Candle: React.FC<CandlesProps> = ({ count = 10 }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parentRef.current) return;

    // Pre-create candles and hide them
    for (let i = 0; i < count; i++) {
      const candle = document.createElement("div");
      candle.className = "candle hidden"; // Add 'hidden' class
      parentRef.current?.appendChild(candle);
    }

    const candles = parentRef.current?.querySelectorAll(".candle");
    // console.log("candles", candles);
    // console.log("count", count);

    return () => {
      // Clean up candles
      candles.forEach((candle) => candle.remove());
      //   console.log("Cleaned up candles");
    };
  }, [count]);

  useEffect(() => {
    const drawCandle = () => {
      const parent = parentRef.current;
      if (!parent) return;

      // Find a hidden candle
      const hiddenCandle = parent.querySelector(
        ".candle.hidden"
      ) as HTMLDivElement;
      if (!hiddenCandle) return;

      // Update class and styles to show the candle
      hiddenCandle.classList.remove("hidden");
      hiddenCandle.classList.add(
        Math.random() - 0.5 > 0 ? "positive" : "negative"
      );
      hiddenCandle.style.cssText = `--candle-pos-left: ${
        Math.random() * 100
      }%; --candle-pos-top: ${Math.random() * 50 + 25}%; --candle-size: ${
        Math.random() * 32 + 32
      }px`;
    };

    const handleAnimationEnd = (e: AnimationEvent) => {
      if (e.target && (e.target as HTMLElement).closest(".candle")) {
        const candle = e.target as HTMLElement;
        candle.classList.add("hidden");
        candle.classList.remove("positive", "negative");
      }
    };

    window.addEventListener("animationend", handleAnimationEnd);
    const interval = setInterval(drawCandle, 500);

    return () => {
      window.removeEventListener("animationend", handleAnimationEnd);
      clearInterval(interval);
    };
  }, [count]);

  return <div ref={parentRef}></div>;
};

export default Candle;
