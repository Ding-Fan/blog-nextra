import Card from "./Card";
import { ct, getNextItem, getRandomItem } from "../scripts/utils";
import { useState, useEffect, HTMLAttributes } from "react";
import Button from "./Button";
import {
  faArrowRight,
  faSearch,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";

interface Props extends HTMLAttributes<HTMLElement> {
  list: any[];
}

const ShowCard = ({ list, className }: Props) => {
  const [showItem, setShowItem] = useState(null);

  const search = (text: string) => {
    window.open(`https://dictionary.goo.ne.jp/word/${text}`, "_blank");
  };

  // Run only on the client
  useEffect(() => {
    setShowItem(list[0]);
  }, [list]);

  // Handle shuffle click to get a new random item
  const handleRandomize = () => {
    const newItem = getRandomItem(list);
    setShowItem(newItem);
  };

  // Handle next click to get the next item in the list
  const handleNext = () => {
    const newItem = getNextItem(list, showItem);
    setShowItem(newItem);
  };

  if (!showItem) {
    return <Loading />
  }

  return (
    <div>
      <Card
        className={ct(className)}
        frontContent={<div className="text-3xl">{showItem.content}</div>}
        backContent={showItem.ruby}
      />
      <div className="grid grid-cols-3 mt-2 gap-2">
        <Button name="primary" onClick={() => search(showItem.content)}>
          <div>
            <FontAwesomeIcon
              icon={faSearch}
              className="cursor-pointer text-base self-start text-teal-800"
            />
          </div>
        </Button>
        <Button
          name="primary"
          className="bg-teal-100"
          onClick={handleRandomize}
        >
          <div>
            <FontAwesomeIcon
              icon={faShuffle}
              className="cursor-pointer text-base self-start text-teal-800"
            />
          </div>
        </Button>
        <Button name="primary" className="bg-orange-300" onClick={handleNext}>
          <div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="cursor-pointer text-base self-start text-teal-800"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ShowCard;
