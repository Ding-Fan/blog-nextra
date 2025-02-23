"use client";

// CardBlock.tsx
import React from "react";
import dayjs from "dayjs-setup";
import { ct } from "../scripts/utils";

export type Props = {
  id: string;
  className?: string;
  content: string;
  category: string;
  startTime: dayjs.Dayjs;
  interval?: number;
  progress?: number; // New prop
  onIndicatorClick?: (id: string) => void;
  type?: "card" | "pill";
};

const CardBlock = ({
  className,
  content,
  category,
  id,
  onIndicatorClick = () => { },
  startTime,
  interval = 0,
  progress = 100,
  type = "card",
}: Props) => {
  const styles = {
    card: {
      wrapper: "gap-2",
      indicatorWrapper: "rounded-l-lg ",
      indicator: "w-5",
      contentWrapper: "rounded-r-lg p-2",
      contentText: "text-lg",
    },
    pill: {
      wrapper: "gap-1",
      indicatorWrapper: "rounded-l-md",
      indicator: "w-2",
      contentWrapper: "rounded-r-md",
      contentText: "text-base",
    },
  };

  const formatInterval = (intervalMs: number): string => {
    const durationObj = dayjs.duration(intervalMs);

    const days = Math.floor(durationObj.asDays());
    const hours = durationObj.hours();
    const minutes = durationObj.minutes();
    const seconds = durationObj.seconds();

    let parts = [];
    if (days) parts.push(`${days} day${days !== 1 ? "s" : ""}`);
    if (hours) parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
    if (minutes) parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
    if (seconds && !parts.length)
      parts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);

    return parts.join(" ");
  };

  // Use the passed progress to calculate the indicator height
  const indicatorHeight = `${progress}%`;

  return (
    <div
      className={ct(
        "flex flex-row items-stretch relative",
        styles[type].wrapper,
        className
      )}
    >
      <div
        className={ct(
          "overflow-hidden flex cursor-pointer border-blue-500 border-solid border-2",
          styles[type].indicatorWrapper
        )}
        onClick={() => onIndicatorClick(id)}
      >
        <div
          className={ct("bg-blue-500", styles[type].indicator)}
          style={{
            height: indicatorHeight,
            transition: "height 1s linear",
          }}
        ></div>
      </div>
      <div
        className={ct(
          "content border-black border-solid border bg-stone-50 flex-1",
          styles[type].contentWrapper
        )}
      >
        <div
          className={ct("font-bold line-clamp-2", styles[type].contentText)}
          title={content}
        >
          {content}
        </div>
        {type === "card" && (
          <div className="text-sm text-gray-500">
            {category} - {formatInterval(interval)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardBlock;
