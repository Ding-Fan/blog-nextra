import React, { useState, useEffect } from "react";
import { ct } from "../scripts/utils";

const OGCard = ({ url, note, className, image, icon }) => {
  const [ogData, setOgData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (image) {
      return
    }

    const getOGTags = async (url) => {

      let data = { q: url }
      let key = process.env.NEXT_PUBLIC_LINKPREVIEW_API_KEY;
      let response;

      try {
        response = await fetch('https://api.linkpreview.net', {
          method: 'POST',
          headers: {
            'X-Linkpreview-Api-Key': key,
          },
          mode: 'cors',
          body: JSON.stringify(data),
        })
          .then(res => res.json())

      } catch (error) {
        console.log("Error fetching OG data for URL:", url);
      }

      return response;
    };

    getOGTags(url).then((data) => {
      if (data) {
        setOgData(data);
      } else {
        console.log("No data returned for URL:", url);
      }
      setLoading(false);
    });
  }, [url, image]);

  const handleClick = () => {
    window.open(ogData?.url || url, "_blank");
  };

  const imageSrc = image || ogData?.image;
  const imageAlt = note || ogData?.title || "Image";
  const titleText = ogData?.title || url;
  const descriptionText = ogData?.description || (!loading ? url : '');

  return (
    <div
      className={ct(
        "shadow-md cursor-pointer transition-all ease-out hover:shadow-lg duration-400 hover:scale-105",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center flex-1 p-1">
        {note && (
          <div
            className="text-sm font-bold line-clamp-2 break-all flex items-center"
            title={note}
          >
            {icon && <span className="mr-1">{icon}</span>} {note}
          </div>
        )}
        {
          !(ogData?.image) && (
            <>
              <div
                className="text-sm text-zinc-600 my-1 line-clamp-2 break-all"
                title={titleText}
              >
                {titleText}
              </div>
              {descriptionText && (
                <div
                  className="text-xs text-gray-600 line-clamp-2 break-all"
                  title={descriptionText}
                >
                  {descriptionText}
                </div>
              )}
            </>
          )
        }
      </div>

      {imageSrc && (
        <div className="flex items-center justify-center">
          <img
            className="object-cover h-20"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
      )}
    </div>
  );
};

export default OGCard;
