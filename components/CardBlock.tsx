import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { ct } from "../scripts/utils";

type Props = {
  id: string;
  className?: string;
  content: string;
  category: string;
  startTime: dayjs.Dayjs;
  interval?: number;
  progress?: number; // New prop
  onIndicatorClick?: (id: string) => void;
  onDeleteClick?: (id: string) => void;
  isMenuOpen?: boolean;
  onMenuToggle?: (id: string | null) => void;
};

const CardBlock = ({
  className,
  content,
  category,
  id,
  onIndicatorClick = () => { },
  onDeleteClick = () => { },
  startTime,
  interval = 0,
  progress = 100,
  isMenuOpen = false,     // New prop
  onMenuToggle = () => { },   // New prop
}: Props) => {


  const handleIndicatorClick = () => {
    onMenuToggle(id); // Toggle menu for this card
  };

  const handleComplete = () => {
    onIndicatorClick(id); // Reset startTime
    onMenuToggle(null);   // Close the menu
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this card?");
    if (confirmDelete) {
      onDeleteClick(id);
    }
    onMenuToggle(null);   // Close the menu
  };

  const handleCancel = () => {
    onMenuToggle(null);   // Close the menu
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
    if (seconds && !parts.length) parts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);

    return parts.join(" ");
  };

  // Use the passed progress to calculate the indicator height
  const indicatorHeight = `${progress}%`;

  return (
    <div className={ct("flex flex-row items-stretch gap-2 relative", className)}>
      <div
        className="rounded-l-lg overflow-hidden flex cursor-pointer border-blue-500 border-solid border-2"
        onClick={handleIndicatorClick}
      >
        <div
          className="w-5 bg-blue-500"
          style={{
            height: indicatorHeight,
            transition: "height 1s linear",
          }}
        ></div>
      </div>
      <div className="rounded-r-lg content border-black border-solid border bg-stone-50 flex-1 p-2">
        <div className="text-lg font-bold line-clamp-2" title={content}>
          {content}
        </div>
        <div className="text-sm text-gray-500">
          {category} - {formatInterval(interval)}
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute z-10 mt-8 bg-white border rounded shadow w-32">
          <button
            onClick={handleComplete}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Complete
          </button>
          <button
            onClick={handleDelete}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Delete
          </button>
          <button
            onClick={handleCancel}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default CardBlock;
