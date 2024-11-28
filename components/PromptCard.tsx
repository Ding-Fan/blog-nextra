// components/PromptCard.tsx
import React, { useState } from "react";
import { Prompt } from "../data/types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy, faLink } from "@fortawesome/free-solid-svg-icons";
import ShowImage from "./ShowImage";

type PromptCardProps = {
  prompt: Prompt;
};

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const imageSrc = typeof prompt.image === "string" && prompt.image;

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{prompt.title}</h2>

      <ShowImage
        imageSrc={imageSrc}
        imageAlt={prompt.title}
        image={prompt.image}
      />
      <div className="flex items-center space-x-4">
        {prompt.link && (
          <a
            href={prompt.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faLink} size="lg" />
          </a>
        )}
        <CopyToClipboard text={prompt.content} onCopy={handleCopy}>
          <button className="text-green-500 hover:text-green-700 focus:outline-none">
            {copied ? (
              <FontAwesomeIcon icon={faCheck} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faCopy} size="lg" />
            )}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default PromptCard;
