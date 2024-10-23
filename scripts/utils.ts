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
