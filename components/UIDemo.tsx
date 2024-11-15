import Card from "./Card";
import dayjs from "dayjs";
import CardBlock from "./CardBlock";
import CardStack from "./CardStack";
import DayBox from "./DayBox";
import CardPost from "./CardPost";
import FadeIn from './animation/FadeIn';
import BaseImage from './BaseImage';

const UIDemo = () => {
  const styles = {
    wrapper: "m-6",
    pill: "rounded-full bg-gray-300 p-2 h-6",
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Card frontContent={"１日"} backContent={"ついたち"} />
      </div>
      <div className={styles.wrapper}>
        <CardStack />
      </div>
      <div className="bg-black h-4 relative mt-52"></div>
      <div className={styles.wrapper}>
        <DayBox day={24} />
      </div>
      <div className="w-40 h-20 flex overflow-scroll ">
        <div className="w-24 flex flex-col flex-1 justify-around px-1">
          <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
          <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
          <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
        </div>
        <div className="w-24 flex flex-col flex-1 justify-around px-1">
          <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
          <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
          <CardBlock type="pill" id="id" content="content" category="" startTime={dayjs()} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <CardPost post={{
          title: "title",
          content: "content",
          description: "description",
        }} />
      </div>





      {/* <Candle /> */}

      <div>
        <FadeIn>
          <BaseImage src="https://placecats.com/300/200" />
        </FadeIn>
      </div>


    </div>
  )
}

export default UIDemo;
