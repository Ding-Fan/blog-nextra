// OGCard.server.js
import React, { useState, useEffect } from "react";
import * as cheerio from "cheerio";
import { ct } from "../scripts/utils";

// Function to fetch and parse OG tags
async function getOGTags(url) {
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    console.log("Error fetching OG data for URL:", url);
  }

  if (!response || !response.ok) {
    console.log("Bad response from URL:", url);
    return null;
  }

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

const OGCard = ({ url, note, className }) => {
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


  return ogData ? (
    <div
      className={ct("border cursor-pointer hover:shadow-lg border-solid border-gray-300 rounded-lg p-2 md:p-4 grid grid-cols-4 place-items-center", className)}
      onClick={() => window.open(ogData.url, "_blank")}
    >
      <img className="col-span-1 pr-4" src={ogData.image} alt={ogData.title} />
      <div className="col-span-3 grid place-content-center">
        {
          note ? <div className="text-lg md:text-2xl pb-2">{note}</div> : null
        }
        <div className="text-base md:text-xl pb-1" >{ogData.title}</div>
        <div className="text-sm md:text-base" >{ogData.description}</div>
      </div>
    </div>
  ) : (
    <div
      className={ct("border cursor-pointer hover:shadow-lg border-solid border-gray-300 rounded-lg p-2 md:p-4 grid place-items-center", className)}
      onClick={() => window.open(url, "_blank")}
    >
      <div className="grid place-content-center">
        {
          note ? <div className="text-lg md:text-2xl pb-2">{note}</div> : null
        }
        <div className="text-sm md:text-base" >{url}</div>
      </div>
    </div>
  );
};

export default OGCard;
