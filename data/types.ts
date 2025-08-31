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
  tile_size?: 'small' | 'medium' | 'wide' | 'large';
  position?: number;
  tile_color?: string;
  live_content?: string;
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
