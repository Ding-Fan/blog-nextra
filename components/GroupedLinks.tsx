"use client";
import React from "react";
import OGCard from "./OGCard";
import CardPost from "./CardPost";
import { Link } from "../data/types";

interface GroupedLinksProps {
  groupedLinks: Record<string, Link[]>;
  sortedTags: string[];
}

const GroupedLinks: React.FC<GroupedLinksProps> = ({
  groupedLinks,
  sortedTags,
}) => {
  return (
    <>
      {sortedTags.map((tag) => (
        <CardPost
          className="mb-6"
          key={tag}
          post={{
            title: tag,
            content: (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {groupedLinks[tag].map((link: Link) => (
                  <OGCard
                    key={link.url + tag}
                    className="bg-zinc-800/80 hover:bg-zinc-800/90 transition-colors duration-200"
                    {...link}
                  />
                ))}
              </div>
            ),
          }}
        />
      ))}
    </>
  );
};

export default GroupedLinks;
