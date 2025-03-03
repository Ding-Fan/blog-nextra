"use client";
// ShowLinks.tsx
import React from "react";
import { HOMEPAGE_LINKS, TAG_ORDER_MAP } from "../data";
import { groupLinksByTag } from "../scripts/utils";
import GroupedLinks from "./GroupedLinks";

const ShowLinks: React.FC = () => {
  const groupedLinks = groupLinksByTag(HOMEPAGE_LINKS);

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
    <div className="space-y-6">
      <GroupedLinks groupedLinks={groupedLinks} sortedTags={sortedTags} />
    </div>
  );
};

export default ShowLinks;
