import React from "react";
import CardPost from "./CardPost";
import { Link } from "../data/types";
import { HomePageLinksFromDb } from "../data/linksFromDb";
import HomeIconsClient from "./HomeIconsClient";

interface HomeIconsProps {
  links?: Link[];
}

// This is a server component that fetches data
const HomeIcons: React.FC<HomeIconsProps> = async ({ links: initialLinks }) => {
  // Fetch links from database if not provided as props
  const fetchedLinks = !initialLinks ? await HomePageLinksFromDb() : null;
  const links = initialLinks || fetchedLinks || [];

  // Filter links to only show those with the "home" tag
  let homeLinks = links.filter((link) => link.tags?.includes("home"));

  homeLinks = homeLinks.sort((a, b) => {
    return b.weight - a.weight;
  });

  return (
    <CardPost
      className="mb-6"
      post={{
        title: "home",
        content: <HomeIconsClient links={homeLinks} />,
      }}
    />
  );
};

export default HomeIcons;
