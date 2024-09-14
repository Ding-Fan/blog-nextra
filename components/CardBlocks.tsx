import React, { useEffect, useState } from "react";
import dayjs from "dayjs"; // Import dayjs
import { v4 as uuidv4 } from "uuid"; // Import the UUID generator
import CardBlock from "./CardBlock";

type Props = {};

const CARD_DATA = [
  {
    id: "1",
    content: "bruth teeth",
    startTime: dayjs(),
    interval: dayjs.duration(12, "hours")
  },
  {
    id: "2",
    content: "throw out trash",
    startTime: dayjs(),
    interval: dayjs.duration(3, "days")
  },
  {
    id: "3",
    content: "do laundry",
    startTime: dayjs(),
    interval: dayjs.duration(4, "days")
  },
  {
    id: "4",
    content: "trim nails",
    startTime: dayjs(),
    interval: dayjs.duration(5, "days")
  },
  {
    id: "5",
    content: "take a shower",
    startTime: dayjs(),
    interval: dayjs.duration(1, "days")
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
