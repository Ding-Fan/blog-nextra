import { create } from 'zustand';
import { ANIMATION_TIME } from '../components/Card';

interface CardState {
  flipped: boolean;
  setFlipped: (flipped: boolean) => void;
  autoFlip: () => Promise<void>; // Updated: Changed return type to Promise<void>
}

export const useStore = create<CardState>((set) => ({
  flipped: false,
  setFlipped: (flipped) => set({ flipped }),
  // Updated autoFlip function to be async and return a Promise
  autoFlip: () => {
    return new Promise<void>((resolve) => {
      set({ flipped: true });
      setTimeout(() => {
        set({ flipped: false });
        setTimeout(() => {
          resolve(); // Resolve the promise after flipping back animation finished
        }, ANIMATION_TIME)
      }, ANIMATION_TIME); // Adjust the delay as needed
    });
  },
}));
