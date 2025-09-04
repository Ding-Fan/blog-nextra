"use client";

import React from "react";
import { Link } from "../data/types";
import ShowImage from "./image/ShowImage";
import { getColorByTileSize } from "./utils/windowsPhoneColors";

interface HomeIconsClientProps {
  links: Link[];
}

const HomeIconsClient: React.FC<HomeIconsClientProps> = ({ links }) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const getTileClasses = (tileSize?: string) => {
    switch (tileSize) {
      case 'small': return 'col-span-1 row-span-1'; // 1x1
      case 'medium': return 'col-span-2 row-span-1'; // 2x1
      case 'wide': return 'col-span-4 row-span-1'; // 4x1
      case 'large': return 'col-span-2 row-span-2'; // 2x2
      default: return 'col-span-1 row-span-1'; // default to small
    }
  };

  const getTileColor = (link: Link) => {
    return link.tileColor || getColorByTileSize(link.tileSize || 'small');
  };

  // Split links into two sections for desktop 2x4-column layout
  const midPoint = Math.ceil(links.length / 2);
  const leftSection = links.slice(0, midPoint);
  const rightSection = links.slice(midPoint);

  const renderTileSection = (sectionLinks: Link[]) => (
    <div className="grid grid-cols-4 gap-2 auto-rows-[80px]">
      {sectionLinks.map((link: Link) => {
        const tileColor = getTileColor(link);
        const isSquare = link.tileSize === 'small' || !link.tileSize;
        return (
          <div
            key={link.url}
            className={`group relative cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${getTileClasses(link.tileSize)
              } ${isSquare ? 'aspect-square' : ''}`}
            style={{ backgroundColor: tileColor }}
            onClick={() => handleClick(link.url)}
          >
            <div className="w-full h-full flex flex-col items-center justify-between p-2 gap-2">
              {/* Icon area */}
              <div className="flex-1 flex items-center justify-center min-h-0 w-full">
                <div className="w-full h-full flex items-center justify-center">
                  <ShowImage
                    className="text-white text-2xl lg:text-3xl max-w-[74%] max-h-[74%] object-contain drop-shadow-lg"
                    imageSrc=""
                    imageAlt=""
                    image={link.image}
                  />
                </div>
              </div>

              {/* Text label at bottom */}
              <div className="w-full text-center flex-shrink-0">
                <span className="text-white text-xs font-medium leading-tight block truncate">
                  {link.note || new URL(link.url).hostname}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full bg-black p-4 rounded-lg">
      {/* Desktop: Two 4-column sections side by side */}
      <div className="hidden lg:flex gap-2">
        <div className="flex-1">
          {renderTileSection(leftSection)}
        </div>
        <div className="flex-1">
          {renderTileSection(rightSection)}
        </div>
      </div>

      {/* Mobile: Single 4-column section */}
      <div className="lg:hidden">
        {renderTileSection(links)}
      </div>
    </div>
  );
};

export default HomeIconsClient;
