import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import BaseKnob from "./components/BaseKnob";
import BaseLink from "./components/BaseLink";
import Caption from "./components/Caption";
import CardBlocks from "./components/CardBlocks";
import CardPost from "./components/CardPost";
import Character from "./components/programming/Character";
import CSSEffect from "./components/CSSEffect";
import DuckHome from "./components/DuckHome";
import GalleryImage from "./components/image/GalleryImage";
import MobileGallery from "./components/MobileGallery";
import OGCard from "./components/OGCard.tsx";
import Paragraph from "./components/Paragraph.tsx";
import Particle from "./components/Particle";
import QuizApp from "./components/quiz-app";
import ProgrammingImage from "./components/programming/ProgrammingImage";
import RichImage from "./components/image/RichImage";
import RichVideo from "./components/video/RichVideo";
import ShowCards from "./components/ShowCards";
import ShowLinks from "./components/ShowLinks";
import ShowPrompts from "./components/ShowPrompts";
import ShowQuote from "./components/ShowQuote";
import UIDemo from "./components/UIDemo";
import WordList from "./components/WordList";
import YouTubeLatest from "./components/YouTubeLatest";
import HomeIcons from "./components/HomeIcons";

// Drama components
import {
  Character as DramaCharacter,
  Scene,
  Narrator,
  Action
} from "./components/drama";

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components) {
  return {
    ...docsComponents,
    ...components,
    // ... your additional components
    Caption,
    CardBlocks,
    Character,
    CSSEffect,
    CSSEffect,
    DuckHome,
    GalleryImage,
    MobileGallery,
    OGCard,
    Paragraph,
    Particle,
    ProgrammingImage,
    RichImage,
    RichVideo,
    WordList,
    YouTubeLatest,
    BaseKnob,
    BaseLink,
    CardPost,
    QuizApp,
    ShowCards,
    ShowLinks,
    ShowPrompts,
    ShowQuote,
    UIDemo,
    HomeIcons,
    // Drama components
    DramaCharacter,
    Scene,
    Narrator,
    Action,
  };
}
