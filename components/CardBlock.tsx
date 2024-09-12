import React from "react";
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
  return (
    <div className="flex flex-row items-stretch gap-2">
      <div
        className="rounded-full overflow-hidden flex cursor-pointer"
        onClick={() => onIndicatorClick(id)}
      >
        <div
          className="w-5 bg-blue-500"
          style={{
            height: (dayjs().diff(startTime) / interval) * 100 + "%",
          }}
        ></div>
      </div>
      <div className="content h-32 border-black border-solid border bg-stone-50 flex-1">
        <div className="">{content}</div>
        <div className="">{dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
        <div className="">
          start time: {dayjs(startTime).format("YYYY-MM-DD HH:mm:ss")}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
