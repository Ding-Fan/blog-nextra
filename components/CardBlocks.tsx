import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the UUID generator
import CardBlock from "./CardBlock";

type Props = {};

const CARD_DATA = [
  {
    id: "1",
    content: "bruth teeth",
    startTime: 0,
    interval: 12 * 60 * 60 * 1000, // 12 hours
  },
  {
    id: "2",
    content: "throw out trash",
    startTime: 0,
    interval: 24 * 60 * 60 * 1000, // 24 hours
  },
]

const CardBlocks = (props: Props) => {
  const [cards, setCards] = useState([]);

  const mergeCards = (defaultCards, storedCards) => {
    const storedCardsMap = new Map(storedCards.map(card => [card.id, card]));
    return defaultCards.map(card => storedCardsMap.get(card.id) || card);
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
