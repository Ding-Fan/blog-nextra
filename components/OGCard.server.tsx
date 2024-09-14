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
        "border cursor-pointer hover:shadow-lg border-solid border-gray-300 rounded-lg p-2 md:p-4 flex",
        className
      )}
      onClick={handleClick}
    >
      {ogData?.image && (
        <img
          className="w-24 h-24 object-cover rounded-lg mr-4"
          src={ogData.image}
          alt={ogData.title || "Image"}
        />
      )}
      <div className="flex flex-col justify-center flex-1">
        {note && (
          <div
            className="text-lg md:text-2xl pb-2 line-clamp-2 break-all"
            title={note}
          >
            {note}
          </div>
        )}
        <div
          className="text-base md:text-xl pb-1 font-semibold line-clamp-2 break-all"
          title={ogData?.title || url}
        >
          {ogData?.title || url}
        </div>
        {ogData?.description ? (
          <div
            className="text-sm md:text-base text-gray-600 line-clamp-2 break-all"
            title={ogData.description}
          >
            {ogData.description}
          </div>
        ) : (
          !loading && (
            <div
              className="text-sm md:text-base text-gray-600 line-clamp-2 break-all"
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
