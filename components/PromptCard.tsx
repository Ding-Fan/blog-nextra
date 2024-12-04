// components/PromptCard.tsx
import React, { useState } from "react";
import { Prompt } from "../data/types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy, faLink } from "@fortawesome/free-solid-svg-icons";
import ShowImage from "./ShowImage";
import Button from "./Button";

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
    <div className="bg-zinc-200 p-1 ">
      <div className="font-semibold py-1">{prompt.title}</div>
      <ShowImage
        imageSrc={imageSrc}
        imageAlt={prompt.title}
        image={prompt.image}
      />
      <div className="flex items-center gap-2 ">
        {prompt.link && (
          <div className="flex-1">
            <a
              href={prompt.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Button name="primary" className="text-sm">
                <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </div>
        )}
        <div className=" flex-1">
          <CopyToClipboard text={prompt.content} onCopy={handleCopy}>
            <Button name="primary" className="text-sm">
              {copied ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faCopy} />
              )}
            </Button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
