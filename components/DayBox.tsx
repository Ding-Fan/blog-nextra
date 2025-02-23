import { ct } from "../scripts/utils";
import dayjs from "dayjs-setup";
import CardBlock from "./CardBlock";

const DayBox = ({ day }: { day: number }) => {

  const isToday = true;

  // todo:
  // 25H feature

  return (
    <div className="w-32 h-32 border-solid border-black border flex flex-col">
      <div className={ct("h-6 border-b border-solid border-black flex", isToday && "bg-pink-300")}>
        <div className="mr-auto">
          {day}
        </div>
        <div>
          rain
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-around px-1">
        <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
        <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
        <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
      </div>
    </div>
  )
}

export default DayBox;
