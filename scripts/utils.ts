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
