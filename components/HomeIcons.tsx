"use client";
import React from "react";
import CardPost from "./CardPost";
import { Link } from "../data/types";
import ShowImage from "./image/ShowImage";
import { HOMEPAGE_LINKS } from "../data";

interface HomeIconsProps {
  links: Link[];
}

const HomeIcons: React.FC<HomeIconsProps> = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  // Filter links to only show those with the "home" tag
  const homeLinks = HOMEPAGE_LINKS.filter((link) =>
    link.tags?.includes("home")
  );

  return (
    <CardPost
      className="mb-6"
      post={{
        title: "home",
        content: (
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
            {homeLinks.map((link: Link) => (
              <div
                key={link.url}
                className="group relative flex items-center justify-center w-full aspect-square"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <ShowImage
                    onClick={() => handleClick(link.url)}
                    className="w-full h-full xl:p-2 text-5xl lg:text-6xl cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3"
                    imageSrc=""
                    imageAlt=""
                    image={link.image}
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <span className="text-xs bg-zinc-800 text-white px-2 py-1 rounded whitespace-nowrap">
                    {link.note || link.url}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ),
      }}
    />
  );
};

export default HomeIcons;
