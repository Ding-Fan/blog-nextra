// ShowLinks.tsx
import React from "react";
import OGCard from "./OGCard";
import { HOMEPAGE_LINKS, TAG_ORDER_MAP } from "../data";
import CardPost from "./CardPost";
import { Link } from "../data/types";
import { groupLinksByTag } from "../scripts/utils";
import ShowImage from "./image/ShowImage";

const ShowLinks: React.FC = () => {
  const groupedLinks = groupLinksByTag(HOMEPAGE_LINKS);

  // Create a sorted array of tags based on tagOrder
  const sortedTags = Object.keys(groupedLinks).sort((a, b) => {
    const indexA = TAG_ORDER_MAP[a] || Number.MAX_SAFE_INTEGER;
    const indexB = TAG_ORDER_MAP[b] || Number.MAX_SAFE_INTEGER;

    if (indexA === indexB) {
      return a.localeCompare(b);
    } else {
      return indexA - indexB;
    }
  });

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      {
        <CardPost
          className="mb-2"
          post={{
            title: "home",
            content: (
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {groupedLinks["home"].map((link: Link) => (
                  <ShowImage
                    onClick={() => handleClick(link.url)}
                    className="p-1 text-5xl md:text-6xl cursor-pointer transition-all ease-out duration-400 hover:scale-105 "
                    imageSrc=""
                    imageAlt=""
                    image={link.image}
                  />
                ))}
              </div>
            ),
          }}
        />
      }

      {sortedTags.map((tag) => (
        <CardPost
          className="mb-2"
          key={tag}
          post={{
            title: tag,
            content: (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {groupedLinks[tag].map((link: Link) => (
                  <OGCard
                    key={link.url + tag}
                    className="mb-2 bg-zinc-800/80"
                    {...link}
                  />
                ))}
              </div>
            ),
          }}
        />
      ))}
    </div>
  );
};

export default ShowLinks;
