import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

type Props = {
  id: string;
  content: string;
  startTime: number;
  interval: number;
  onIndicatorClick: (id: string) => void;
};

const CardBlock = ({
  content,
  id,
  onIndicatorClick,
  startTime,
  interval,
}: Props) => {
  const [indicatorHeight, setIndicatorHeight] = useState(
    (dayjs().diff(startTime) / interval) * 100 + "%"
  );

  // Function to update the height of the indicator every second
  useEffect(() => {
    const updateHeight = () => {
      const newHeight = (dayjs().diff(startTime) / interval) * 100 + "%";
      setIndicatorHeight(newHeight);
    };

    // Update the height every second
    const intervalId = setInterval(updateHeight, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [startTime, interval]);

  return (
    <div className="flex flex-row items-stretch gap-2">
      <div
        className="rounded-full overflow-hidden flex cursor-pointer"
        onClick={() => onIndicatorClick(id)}
      >
        <div
          className="w-5 bg-blue-500"
          style={{
            height: indicatorHeight,
          }}
        ></div>
      </div>
      <div className="content h-32 border-black border-solid border bg-stone-50 flex-1">
        <div className="">{content}</div>
        {/* <div className="">now: {dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
        <div className="">
          start time: {dayjs(startTime).format("YYYY-MM-DD HH:mm:ss")}
        </div> */}
      </div>
    </div>
  );
};

export default CardBlock;
