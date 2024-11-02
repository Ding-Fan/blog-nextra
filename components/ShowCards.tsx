// ShowCards.tsx
import { useEffect, useState } from 'react';
import ShowCard from './ShowCard';
import Button from './Button';
import { Word, WORDS_DATA } from '../data';

interface DataSet {
  id: string;
  title: string;
  content: Word[]
}

interface ShowCardsProps {
  dataSets?: DataSet[];
}

const ShowCards: React.FC<ShowCardsProps> = ({ dataSets = WORDS_DATA }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {/* Buttons to switch between data sets */}
      <div className="grid grid-cols-2 gap-2 my-4">
        {dataSets.map((dataSet, index) => (
          <Button
            name={
              activeIndex === index
                ? 'primary'
                : 'secondary'
            }
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`mx-2`}
          >
            {dataSet.title}
          </Button>
        ))}
      </div>

      {/* ShowCard component displaying the active data set */}
      <div className="flex justify-center my-4">
        <ShowCard list={dataSets[activeIndex].content} />
      </div>
    </div>
  );
};

export default ShowCards;
