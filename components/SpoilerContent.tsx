import React from "react";
import CSSEffect from "./CSSEffect"; // Adjust the import path as needed

const SpoilerContent = ({ item }) => {
  const { text } = item;
  const normalText = text.find((t) => t.type === "normal").content;
  const spoilers = text.find((t) => t.type === "spoiler").content;

  // Function to process the text and replace spoilers with CSSEffect components
  const processText = (content, spoilers) => {
    const parts = [];
    let remainingText = content;

    spoilers.forEach((spoiler, index) => {
      const spoilerIndex = remainingText.indexOf(spoiler);
      if (spoilerIndex !== -1) {
        // Text before the spoiler
        if (spoilerIndex > 0) {
          parts.push(remainingText.substring(0, spoilerIndex));
        }
        // The spoiler wrapped in CSSEffect
        parts.push(
          <CSSEffect effect="hoverClear" key={index}>
            {spoiler}
          </CSSEffect>
        );
        // Update remaining text
        remainingText = remainingText.substring(spoilerIndex + spoiler.length);
      }
    });

    // Add any remaining text after the last spoiler
    if (remainingText.length > 0) {
      parts.push(remainingText);
    }

    return parts;
  };

  const contentParts = processText(normalText, spoilers);

  return <div>{contentParts}</div>;
};

export default SpoilerContent;
