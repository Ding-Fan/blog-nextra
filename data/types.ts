import { ReactNode } from "react";

export interface Prompt {
  title: string;
  content: string;
  link?: string;
  tags: string[];
  image?: string | ReactNode;
}

export interface Link {
  url: string;
  note?: string;
  tags?: string[];
  image?: string | ReactNode;
  weight?: number; // base is 10, higher is more important
  description?: ReactNode;
  needFetch?: boolean;
  tileSize?: 'small' | 'medium' | 'wide' | 'large'; // 1x1, 2x1, 4x1, 2x2
  position?: number;
  tileColor?: string; // Windows Phone blue palette
  liveContent?: string;
}

export interface Word {
  ruby: string;
  content: string;
}
export type ListItem = Word | TextItem;
export interface DataSetItem {
  id: string;
  title: string;
  flippable: boolean;
  content: ListItem[];
}
// Define possible text types
export type TextType = "spoiler" | "normal"; // Extend as needed

// Define the structure of each text item
export interface TextItem {
  text: {
    type: TextType;
    content: string | string[];
  }[];
}

type CommonKeys = "title" | "author";
export interface Post extends Partial<Record<CommonKeys, ReactNode>> {
  content?: ReactNode;
  description?: ReactNode;
  hidden?: boolean;
}
