import Card from "./Card";
import { ct, getRandomItem } from "../scripts/utils";
import { useState, useEffect, HTMLAttributes } from "react";
import Button from "./Button";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props extends HTMLAttributes<HTMLElement> {
  list: any[]
}

const RandomCard = ({ list, className }: Props) => {
  const [randomItem, setRandomItem] = useState(null);

  const search = (text: string) => {
    window.open(`https://dictionary.goo.ne.jp/word/${text}`, '_blank');
  }

  // Run only on the client
  useEffect(() => {
    const item = getRandomItem(list);
    setRandomItem(item);
  }, [list]);

  // Handle right arrow click to get a new random item
  const handleRandomize = () => {
    const newItem = getRandomItem(list);
    setRandomItem(newItem);
  }

  if (!randomItem) {
    return <p>Loading...</p>;
  }

  return <div>
    <Card
      className={ct(className)}
      frontContent={<div className="text-3xl">{randomItem.content}</div>}
      backContent={randomItem.ruby}
    />
    <div className="grid grid-cols-2 mt-2 gap-2">
      <Button
        name='primary'
        onClick={() => search(randomItem.content)}
      >
        <div>
          <FontAwesomeIcon icon={faSearch} className='cursor-pointer text-base self-start text-teal-800' />
        </div>
      </Button>
      <Button
        name='primary'
        className='bg-teal-100'
        onClick={handleRandomize}
      >
        <div>
          <FontAwesomeIcon icon={faArrowRight} className='cursor-pointer text-base self-start text-teal-800' />
        </div>
      </Button>
    </div>
  </div>
};

export default RandomCard;
