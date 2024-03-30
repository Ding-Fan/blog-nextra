import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function ct(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
