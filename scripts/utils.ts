import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function ct(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isUrl(url: string): boolean {
  try {
    new URL(url); // Tries to create a new URL object
    return true;
  } catch (_) {
    return false; // If it throws an error, it's not a valid URL
  }
}

export function getOssUrl(name: string): string {
  const OSS_BASE_URL = "https://pub-d73fbea1d5a74032a6bef88df97b73f2.r2.dev/";
  return `${OSS_BASE_URL}${name}`;
}

export function getRandomItem<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export function getNextItem<T>(list: T[], currentItem: T): T {
  const currentIndex = list.indexOf(currentItem);
  const nextIndex = (currentIndex + 1) % list.length;
  return list[nextIndex];
}

export const withLock = async (lockState: boolean, setLock: (state: boolean) => void, callback: () => Promise<void>) => {
  if (lockState) return; // If lock is active, return early
  setLock(true); // Set lock to active

  try {
    await callback(); // Execute the callback passed in
  } finally {
    setLock(false); // Release the lock after completion, even if there’s an error
  }
};
