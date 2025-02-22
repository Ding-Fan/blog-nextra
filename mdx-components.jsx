import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import BaseKnob from "./components/BaseKnob";
import UIDemo from "./components/UIDemo";
import BaseLink from "./components/BaseLink";
import CardPost from "./components/CardPost";
import Caption from './components/Caption'
import CardBlocks from './components/CardBlocks';
import CSSEffect from "./components/CSSEffect";
import DuckHome from "./components/DuckHome";
import GalleryImage from "./components/image/GalleryImage";
import MobileGallery from "./components/MobileGallery";
import OGCard from "./components/OGCard.tsx";
import Paragraph from "./components/Paragraph.tsx";
import Particle from "./components/Particle";
import RichImage from "./components/image/RichImage";
import RichVideo from "./components/video/RichVideo"
import ShowCards from "./components/ShowCards";
import ShowLinks from "./components/ShowLinks";
import ShowPrompts from "./components/ShowPrompts";
import ShowQuote from "./components/ShowQuote";
import WordList from "./components/WordList";
import YouTubeLatest from "./components/YouTubeLatest"

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components) {
    return {
        ...docsComponents,
        ...components,
        // ... your additional components
        Caption,
        CardBlocks,
        CSSEffect,
        CSSEffect,
        DuckHome,
        GalleryImage,
        MobileGallery,
        OGCard,
        Paragraph,
        Particle,
        RichImage,
        RichVideo,
        WordList,
        YouTubeLatest,
ShowCards,
ShowQuote,
ShowLinks,
ShowPrompts,
BaseKnob,
CardPost,
BaseLink,
UIDemo
    }
}