// OGCard.server.js
import React, { useState, useEffect } from "react";
import * as cheerio from "cheerio";

// Function to fetch and parse OG tags
async function getOGTags(url) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const getMetaTag = (name) =>
    $(`meta[name='${name}']`).attr("content") ||
    $(`meta[property='og:${name}']`).attr("content") ||
    $(`meta[property='twitter:${name}']`).attr("content");

  return {
    title: getMetaTag("title"),
    description: getMetaTag("description"),
    image: getMetaTag("image"),
    url,
  };
}

const OGCard = ({ url }) => {
  const [ogData, setOgData] = useState(null);

  useEffect(() => {
    getOGTags(url).then((data) => {
      if (data) {
        setOgData(data);
      } else {
        // Handle the case where OG data could not be fetched
        console.log("No data returned for URL:", url);
      }
    });
  }, [url]);

  if (!ogData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="border cursor-pointer hover:shadow-lg border-solid border-gray-300 rounded-lg p-4 grid grid-cols-4"
      onClick={() => window.open(ogData.url, "_blank")}
    >
      <img className="col-span-1 pr-4" src={ogData.image} alt={ogData.title} />
      <div className="col-span-3 grid place-content-center">
        <h2 className="text-2xl pb-2">{ogData.title}</h2>
        <p>{ogData.description}</p>
      </div>
    </div>
  );
};

export default OGCard;
