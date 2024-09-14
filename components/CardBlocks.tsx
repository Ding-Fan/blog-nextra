import React, { useEffect, useState } from "react";
import dayjs from "dayjs"; // Import dayjs
import { v4 as uuidv4 } from "uuid"; // Import the UUID generator
import CardBlock from "./CardBlock";

type Props = {};

const CARD_DATA = [
  {
    id: "d69a052d-cd24-4049-9402-d1ef7a4cd3ba",
    content: "bruth teeth",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(12, "hours")
  },
  {
    id: "cb8ad74c-6e71-4cd0-a3c4-77398241f49c",
    content: "use perfume",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(3, "hours")
  },
  {
    id: "6c58a0b8-4838-4387-a519-831e7a78816e",
    content: "use sunscreen",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(24, "hours")
  },
  {
    id: "f31523a1-6973-4abd-b172-d04c017d577a",
    content: "wash glasses",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(12, "hours")
  },
  {
    id: "d3aa9abc-931f-4e5a-bfa5-26cb1f57b3b2",
    content: "trim nails",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(5, "days")
  },
  {
    id: "bfc00df8-d054-41b5-94bd-ddb2195fb734",
    content: "take a shower",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(1, "days")
  },
  {
    id: "5ac83d55-de0b-4d6e-b367-56c65db0e796",
    content: "floosing",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(24, "hours")
  },
  {
    id: "5a2837ac-577f-4d3a-80c0-f9a5b70f2797",
    content: "wash hands",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(3, "hours")
  },
  {
    id: "04324a11-d7d6-481a-bf63-698e126bc1b7",
    content: "wash feet",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(6, "hours")
  },
  {
    id: "3057b64c-5c4a-44aa-b412-564f2d2874e4",
    content: "wash face",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(6, "hours")
  },
  {
    id: "a6219279-24ae-4a69-a09c-a6d87e197917",
    content: "wash hair",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(24, "hours")
  },
  {
    id: "c8dfa95e-be5c-4046-876f-f19ab0d95a84",
    content: "throw out trash",
    startTime: dayjs(),
    interval: dayjs.duration(3, "days")
  },
  {
    id: "9355a974-a638-4074-ba59-1f074027bbc9",
    content: "do laundry",
    startTime: dayjs(),
    interval: dayjs.duration(4, "days")
  },
]

const CardBlocks = (props: Props) => {
  const [cards, setCards] = useState([]);

  const mergeCards = (defaultCards, storedCards) => {
    const defaultCardsMap = new Map(defaultCards.map(card => [card.id, card]));
    const allCardIds = new Set([...defaultCards.map(card => card.id), ...storedCards.map(card => card.id)]);

    return Array.from(allCardIds).map(id => storedCards.find(card => card.id === id) || defaultCardsMap.get(id))
  }

  const clearCards = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all cards?");
    if (!confirmClear) return;
    localStorage.removeItem("cards");
    setCards([]);
  }

  useEffect(() => {
    // When the page loads, try to get cards from localStorage
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(mergeCards(CARD_DATA, storedCards));
  }, []);

  const addNewCard = () => {
    const newCard = {
      id: uuidv4(),
      content: `Card ${cards.length + 1} Content`,
      startTime: Date.now(),
      //   interval: 12 * 60 * 60 * 1000, // 12 hours
      interval: 5 * 60 * 1000, // 5 minutes
    };
    const newCards = [...cards, newCard];
    saveCards(newCards);
  };

  const handleCardInteraction = (id) => {
    handleBlueClick(id); // Reset block
  };

  const handleBlueClick = (id) => {
    refreshCard(id);
  };

  const refreshCard = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, startTime: Date.now() };
      }
      return card;
    });
    saveCards(updatedCards);
  };

  const saveCards = (newCards) => {
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards)); // Save to localStorage
  };

  return (
    <div>
      <button onClick={addNewCard} className="mb-4 p-2 bg-green-500 text-white">
        Add New Card
      </button>
      <button onClick={clearCards} className="mb-4 p-2 bg-red-500 text-white">
        Clear All Cards
      </button>
      <div className="flex flex-col gap-2">
        {cards.map((card) => (
          <CardBlock
            key={card.id}
            id={card.id}
            content={card.content}
            startTime={card.startTime}
            interval={card.interval}
            onIndicatorClick={handleCardInteraction}
          />
        ))}
      </div>
    </div>
  );
};

export default CardBlocks;
