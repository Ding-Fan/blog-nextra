"use client";

// CardBlocks.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import dayjs from "dayjs"; // Import dayjs
import { v4 as uuidv4 } from "uuid"; // Import the UUID generator
import CardBlockAndMenu from "./CardBlockAndMenu";
import { useMenuState } from "../hooks";

type Props = {};

const CARD_DATA = [
  {
    id: "2",
    content: "test card",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "d69a052d-cd24-4049-9402-d1ef7a4cd3ba",
    content: "bruth teeth",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "cb8ad74c-6e71-4cd0-a3c4-77398241f49c",
    content: "use perfume",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "6c58a0b8-4838-4387-a519-831e7a78816e",
    content: "use sunscreen",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "f31523a1-6973-4abd-b172-d04c017d577a",
    content: "wash glasses",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "d3aa9abc-931f-4e5a-bfa5-26cb1f57b3b2",
    content: "trim nails",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "bfc00df8-d054-41b5-94bd-ddb2195fb734",
    content: "take a shower",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "5ac83d55-de0b-4d6e-b367-56c65db0e796",
    content: "floosing",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "5a2837ac-577f-4d3a-80c0-f9a5b70f2797",
    content: "wash hands",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "04324a11-d7d6-481a-bf63-698e126bc1b7",
    content: "wash feet",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "3057b64c-5c4a-44aa-b412-564f2d2874e4",
    content: "wash face",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "a6219279-24ae-4a69-a09c-a6d87e197917",
    content: "wash hair",
    startTime: dayjs(),
    category: "hygiene",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "c8dfa95e-be5c-4046-876f-f19ab0d95a84",
    content: "throw out trash",
    startTime: dayjs(),
    category: "chores",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "9355a974-a638-4074-ba59-1f074027bbc9",
    content: "do laundry",
    startTime: dayjs(),
    category: "chores",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "8d59a612-05d5-4e85-8c33-55ec40a3eb14",
    content: "do dishes",
    startTime: dayjs(),
    category: "chores",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "11de397f-3a40-41dc-944a-6c8af4d16780",
    content: "tidy up",
    startTime: dayjs(),
    category: "chores",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "1d43a065-25a3-459f-a42e-4f090c29719d",
    content: "clean room",
    startTime: dayjs(),
    category: "chores",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "305baca7-e081-4a52-8458-f920fb0a82f7",
    content: "read book",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "c5310b27-de13-4e69-9717-818b5e09ed64",
    content: "organize handouts",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "988b9826-dcc6-4b3c-afba-d6ec50300c82",
    content: "study CCNA",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "1216fe3b-15d0-4485-b3dd-0af4517677ef",
    content: "study システム",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "a94c1eee-3cca-4efb-a4ee-481f9106ce0a",
    content: "study JAVA",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(3, "days").asMilliseconds(),
  },
  {
    id: "8561c028-4635-4b86-b22b-a01aa5e5ba15",
    content: "read HTDP",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "f401d5d0-9444-4cca-8fdb-39db14b521e8",
    content: "create side project",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "7d0ac165-f497-4808-8b95-d084d85b652a",
    content: "create Java tutorial",
    startTime: dayjs(),
    category: "education",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "e4e105a0-6bc4-4d09-934d-650dedce8eb8",
    content: "backup computer",
    startTime: dayjs(),
    category: "maintenance",
    interval: dayjs.duration(2, "minutes").asMilliseconds(),
  },
  {
    id: "253fcb2f-847f-420b-a271-6ef840739d2f",
    content: "backup phones",
    startTime: dayjs(),
    category: "maintenance",
    interval: dayjs.duration(4, "months").asMilliseconds(),
  },
];

const CardBlocks = (props: Props) => {
  const [cards, setCards] = useState([]);
  const [cardsWithProgress, setCardsWithProgress] = useState([]);
  const { openMenuId, toggleMenu } = useMenuState();

  // Function to merge CARD_DATA with stored cards
  const mergeCards = (defaultCards, storedCards) => {
    const defaultCardsMap = new Map(
      defaultCards.map((card) => [card.id, card])
    );
    const allCardIds = new Set([
      ...defaultCards.map((card) => card.id),
      ...storedCards.map((card) => card.id),
    ]);

    return Array.from(allCardIds).map(
      (id) =>
        storedCards.find((card) => card.id === id) || defaultCardsMap.get(id)
    );
  };

  // Load initial cards on component mount
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];

    // Convert stored startTime back to Day.js objects
    const processedStoredCards = storedCards.map((card) => ({
      ...card,
      startTime: dayjs(card.startTime),
    }));

    // Merge CARD_DATA with stored cards
    const initialCards = mergeCards(CARD_DATA, processedStoredCards);

    setCards(initialCards);

    // Initialize cardsWithProgress
    const initialCardsWithProgress = initialCards.map(calculateCardProgress);

    setCardsWithProgress(initialCardsWithProgress);

    // Immediately sort after initialization
    computeAndSortCards(true);
  }, []);

  // Calculate card progress
  const calculateCardProgress = useCallback((card) => {
    const elapsed = dayjs().diff(card.startTime);
    const progress = (elapsed / card.interval) * 100;
    // if(Number.isNaN(progress)) {
    //   console.log("startTime", card.startTime);
    //   console.log("interval", card.interval);
    // }
    return { ...card, progress: Math.min(Math.max(progress, 0), 100) };
  }, []);

  // Compute and sort cards
  const computeAndSortCards = useCallback(
    (shouldSort = false) => {
      // Update progress values in the current order
      let updatedCards = cards.map(calculateCardProgress);

      if (shouldSort && openMenuId === null) {
        // Sort the cards by progress
        updatedCards = updatedCards
          .slice() // Create a copy to avoid mutating in place
          .sort((a, b) => {
            if (b.progress !== a.progress) {
              return b.progress - a.progress;
            }
            // Tie-breaker using card IDs for consistency
            return a.id.localeCompare(b.id);
          });
      }

      // Only update if there is a real change
      setCardsWithProgress(updatedCards);
    },
    [cards, calculateCardProgress, openMenuId]
  );

  // Update progress every second without sorting
  useEffect(() => {
    const progressInterval = setInterval(() => {
      computeAndSortCards(false);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
    };
  }, [cards, computeAndSortCards]);

  // Sort cards every 4 minutes
  useEffect(() => {
    const sortInterval = setInterval(() => {
      computeAndSortCards(true);
    }, 240000); // 240,000 milliseconds = 4 minutes

    return () => {
      clearInterval(sortInterval);
    };
  }, [cards, computeAndSortCards]);

  // Recompute and sort when cards change (e.g., added or deleted)
  useEffect(() => {
    computeAndSortCards(true);
  }, [cards, computeAndSortCards]);

  const saveCards = useCallback(
    (newCards) => {
      setCards(newCards);

      // Update cardsWithProgress
      const newCardsWithProgress = newCards.map(calculateCardProgress);

      setCardsWithProgress(newCardsWithProgress);

      // Save to localStorage
      const cardsToSave = newCards.map((card) => ({
        ...card,
        startTime: card.startTime.toISOString(),
      }));

      localStorage.setItem("cards", JSON.stringify(cardsToSave));
    },
    [calculateCardProgress]
  );

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    saveCards(updatedCards);
  };

  const addNewCard = useCallback(() => {
    const newCard = {
      id: uuidv4(),
      content: `Card ${cards.length + 1} Content`,
      startTime: dayjs(),
      interval: 5 * 60 * 1000, // 5 minutes
      category: "new category",
    };
    const newCards = [...cards, newCard];
    saveCards(newCards);
  }, [cards, saveCards]);

  const refreshCard = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, startTime: dayjs() };
      }
      return card;
    });
    saveCards(updatedCards);
  };

  const clearCards = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all cards?"
    );
    if (!confirmClear) return;
    localStorage.removeItem("cards");
    setCards([]);
    setCardsWithProgress([]);
  };

  return (
    <div>
      <button onClick={addNewCard} className="mb-4 p-2 bg-green-500 text-white">
        Add New Card
      </button>
      <button
        onClick={() => clearCards()}
        className="mb-4 p-2 bg-red-500 text-white"
      >
        Clear All Cards
      </button>
      <div className="flex flex-col gap-4">
        {cardsWithProgress.map((card) => (
          <CardBlockAndMenu
            key={card.id}
            id={card.id}
            content={card.content}
            category={card.category}
            startTime={card.startTime}
            interval={card.interval}
            progress={card.progress}
            onDeleteClick={deleteCard}
            onCompleteClick={refreshCard}
            isMenuOpen={openMenuId === card.id}
            onMenuToggle={toggleMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default CardBlocks;
