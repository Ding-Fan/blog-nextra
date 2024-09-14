import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { ct } from "../scripts/utils";

type Props = {
  id: string;
  content: string;
  category: string;
  startTime: dayjs.Dayjs;
  interval: number;
  onIndicatorClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
  isMenuOpen: boolean;
  onMenuToggle: (id: string | null) => void;
};

const CardBlock = ({
  content,
  category,
  id,
  onIndicatorClick,
  onDeleteClick,
  startTime,
  interval,
  isMenuOpen,     // New prop
  onMenuToggle,   // New prop
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

  // Function to calculate the indicator height
  const calculateHeight = () => {
    const elapsed = dayjs().diff(startTime); // in milliseconds
    const total = interval; // total duration in milliseconds
    const progress = (elapsed / total) * 100;

    // Cap the height between 0% and 100%
    const cappedProgress = Math.min(Math.max(progress, 0), 100);

    return `${cappedProgress}%`;
  };

  const [indicatorHeight, setIndicatorHeight] = useState(calculateHeight());

  // Update the height every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndicatorHeight(calculateHeight());
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [startTime, interval]);

  return (
    <div className="flex flex-row items-stretch gap-2 relative">
      <div
        className="rounded-full overflow-hidden flex cursor-pointer border-blue-500 border-solid border-2"
        onClick={handleIndicatorClick} // Updated handler
      >
        <div
          className="w-5 bg-blue-500"
          style={{
            height: indicatorHeight,
            transition: "height 1s linear",
          }}
        ></div>
      </div>
      <div className="content border-black border-solid border bg-stone-50 flex-1 p-2">
        <div className="text-lg font-bold line-clamp-2" title={content}>{content}</div>
        <div className="text-sm text-gray-500">{category}</div>
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
