// ShowLinks.tsx
import React from "react";
import OGCard from "./OGCard";
import { HOMEPAGE_LINKS, TAG_ORDER_MAP } from "../data";
import { groupLinksByTag } from "../scripts/utils";
import CardPost from "./CardPost";
import { Link } from "../data/types";

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

  return (
    <div>
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
                    key={link.url}
                    className="mb-2 bg-white/45"
                    url={link.url}
                    note={link.note}
                    image={link.image}
                    icon={link.icon}
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
