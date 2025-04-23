"use client";

import React from "react";
import { Link } from "../data/types";
import ShowImage from "./image/ShowImage";

interface HomeIconsClientProps {
  links: Link[];
}

const HomeIconsClient: React.FC<HomeIconsClientProps> = ({ links }) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
      {links.map((link: Link) => (
        <div
          key={link.url}
          className="group relative flex items-center justify-center w-full aspect-square"
        >
          <div className="w-full h-full flex items-center justify-center ">
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
  );
};

export default HomeIconsClient;
