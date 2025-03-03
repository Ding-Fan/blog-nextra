import Card, { CardProps } from "./Card";
import { ct, getNextItem, getRandomItem, withLock } from "../scripts/utils";
import { useState, useEffect, HTMLAttributes, ReactNode } from "react";
import Button from "./Button";
import {
  faArrowRight,
  faSearch,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";
import { useStore } from "../state"; // <-- Added import
import { ListItem } from "../data/types";

interface Props<T>
  extends HTMLAttributes<HTMLElement>,
    Pick<CardProps, "flippable" | "id"> {
  list: T[];
  frontRender: (item: T) => ReactNode;
}

const ShowCard = ({
  list,
  frontRender,
  flippable = true,
  className,
  id,
}: Props<ListItem>) => {
  const [showItem, setShowItem] = useState(null);
  const [itemIndex, setItemIndex] = useState(0);
  // **Updated Code:** Added state variable to lock handleNext during flip
  const [isFlipping, setIsFlipping] = useState(false); // <-- Added state

  const search = (text: string) => {
    window.open(`https://dictionary.goo.ne.jp/word/${text}`, "_blank");
  };

  // Run only on the client
  useEffect(() => {
    setShowItem(list[0]);
    setItemIndex(0);
  }, [list]);

  // **Updated Code:** Get autoFlip from Zustand store
  const autoFlip = useStore((state) => state.autoFlip); // <-- Added line

  const handleRandomize = async () => {
    withLock(isFlipping, setIsFlipping, async () => {
      if (flippable) {
        await autoFlip();
      }

      const [newItem, index] = getRandomItem(list);
      setShowItem(newItem);
      setItemIndex(index as number);
    });
  };

  const handleNext = () => {
    withLock(isFlipping, setIsFlipping, async () => {
      if (flippable) {
        await autoFlip();
      }

      const [newItem, index] = getNextItem(list, showItem);
      setShowItem(newItem);
      setItemIndex(index as number);
    });
  };

  if (!showItem) {
    return <Loading />;
  }

  return (
    <div>
      <Card
        className={ct(className)}
        frontContent={frontRender(showItem)}
        backContent={showItem.ruby}
        flippable={flippable}
        id={`${itemIndex + 1}`}
      />
      <div className="grid grid-cols-3 mt-2 gap-2">
        <Button
          variant="primary"
          className="bg-rose-200"
          onClick={() => search(showItem.content)}
        >
          <div>
            <FontAwesomeIcon
              icon={faSearch}
              className="cursor-pointer text-base self-start text-teal-700"
            />
          </div>
        </Button>
        <Button
          variant="primary"
          className="bg-teal-100"
          onClick={handleRandomize}
        >
          <div>
            <FontAwesomeIcon
              icon={faShuffle}
              className="cursor-pointer text-base self-start text-teal-700"
            />
          </div>
        </Button>
        <Button
          variant="primary"
          className="bg-orange-300"
          onClick={handleNext}
        >
          <div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="cursor-pointer text-base self-start text-teal-700"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ShowCard;
