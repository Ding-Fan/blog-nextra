"use client";
// ShowCards.tsx
import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import Button from "./Button";
import SimpleContent from "./SimpleContent";
import SpoilerContent from "./SpoilerContent";
import { DataSetItem } from "../data/types";
import { WORDS_DATA } from "../data";

interface ShowCardsProps {
  dataSets?: DataSetItem[];
}

const ShowCards: React.FC<ShowCardsProps> = ({ dataSets = WORDS_DATA }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderContent = (item) => {
    if (item.content) {
      // Data Type 1
      return <SimpleContent item={item} />;
    } else if (item.text) {
      // Data Type 2
      return <SpoilerContent item={item} />;
    } else {
      return null;
    }
  };

  return (
    <div>
      {/* Buttons to switch between data sets */}
      <div className="grid grid-cols-3 gap-2 my-4">
        {dataSets.map((dataSet, index) => (
          <Button
            name={activeIndex === index ? "primary" : "secondary"}
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`p-1`}
          >
            {dataSet.title}
          </Button>
        ))}
      </div>

      {/* ShowCard component displaying the active data set */}
      <div className="flex justify-center my-4">
        <ShowCard
          flippable={dataSets[activeIndex].flippable}
          list={dataSets[activeIndex].content}
          frontRender={(item) => renderContent(item)}
        />
      </div>
    </div>
  );
};

export default ShowCards;
