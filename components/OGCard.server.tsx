import React, { useState, useEffect } from "react";
import { ct } from "../scripts/utils";

const OGCard = ({ url, note, className }) => {
  const [ogData, setOgData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOGTags = async (url) => {
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
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const getMetaContent = (selector: string): string | undefined => {
        const element = doc.querySelector(selector) as HTMLMetaElement | null;
        return element?.content;
      };

      const getMetaTag = (name: string): string | undefined =>
        getMetaContent(`meta[property='og:${name}']`) ||
        getMetaContent(`meta[name='${name}']`) ||
        getMetaContent(`meta[property='twitter:${name}']`);

      return {
        title: getMetaTag("title") || doc.querySelector("title")?.innerText,
        description: getMetaTag("description"),
        image: getMetaTag("image"),
        url,
      };
    };

    getOGTags(url).then((data) => {
      if (data) {
        setOgData(data);
      } else {
        console.log("No data returned for URL:", url);
      }
      setLoading(false);
    });
  }, [url]);

  const handleClick = () => {
    window.open(ogData?.url || url, "_blank");
  };

  return (
    <div
      className={ct(
        "border cursor-pointer transition-all hover:shadow-md duration-400 hover:scale-105 border-solid border-zinc-400 rounded-lg flex",
        className
      )}
      onClick={handleClick}
    >
      {ogData?.image && (
        <img
          className="w-full h-full object-cover object-cover rounded-lg"
          src={ogData.image}
          alt={ogData.title || "Image"}
        />
      )}
      <div className="flex flex-col justify-center flex-1 p-1">
        {note && (
          <div
            className="text-sm font-bold line-clamp-2 break-all"
            title={note}
          >
            {note}
          </div>
        )}
        <div
          className="text-sm line-clamp-2 break-all"
          title={ogData?.title || url}
        >
          {ogData?.title || url}
        </div>
        {ogData?.description ? (
          <div
            className="text-xs text-gray-600 line-clamp-2 break-all"
            title={ogData.description}
          >
            {ogData.description}
          </div>
        ) : (
          !loading && (
            <div
              className="text-xs text-gray-600 line-clamp-2 break-all"
              title={url}
            >
              {url}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OGCard;
