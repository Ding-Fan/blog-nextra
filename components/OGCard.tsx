import React, { useState, useEffect } from "react";
import { ct } from "../scripts/utils";


const OGCard = ({ url, note, className }) => {
  const [ogData, setOgData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [url]);

  const handleClick = () => {
    window.open(ogData?.url || url, "_blank");
  };

  return (
    <div
      className={ct(
        "border cursor-pointer transition-all ease-out hover:shadow-md duration-400 hover:scale-105 border-solid border-zinc-400 rounded-lg overflow-hidden",
        className
      )}
      onClick={handleClick}
    >
      {ogData?.image && (
        <div>
          <img
            className="object-cover h-20"
            src={ogData.image}
            alt={ogData.title || "Image"}
          />
        </div>
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
        {
          !(ogData?.image) && (
            <>
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
            </>
          )
        }
      </div>
    </div>
  );
};

export default OGCard;