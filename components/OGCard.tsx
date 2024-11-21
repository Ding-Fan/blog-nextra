import React, { useState, useEffect } from "react";
import { ct } from "../scripts/utils";
import { Link } from "../data/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface OGCardProps extends Link, React.HTMLAttributes<HTMLElement> {}

const ShowImage = ({
  imageSrc,
  imageAlt,
  image,
}: {
  imageSrc: string | null;
  imageAlt: string;
  image: React.ReactNode;
}) => {
  if (imageSrc) {
    return (
      <div className="flex items-center justify-center">
        <img className="object-cover min-h-8 max-h-20" src={imageSrc} alt={imageAlt} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center text-5xl p-1 flex-1">
        {image}
      </div>
    );
  }
};

const OGCard = ({
  needFetch,
  url,
  note,
  className,
  image,
  description,
}: OGCardProps) => {
  const [ogData, setOgData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!needFetch) {
      setLoading(false);
      return;
    }

    const getOGTags = async (url: string) => {
      const data = { q: url };
      const key = process.env.NEXT_PUBLIC_LINKPREVIEW_API_KEY;
      let response;

      try {
        response = await fetch("https://api.linkpreview.net", {
          method: "POST",
          headers: {
            "X-Linkpreview-Api-Key": key,
          },
          mode: "cors",
          body: JSON.stringify(data),
        }).then((res) => res.json());
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

  const imageSrc = typeof image === "string" ? image : ogData?.image || null;
  const imageAlt = note || ogData?.title || "Image";
  const titleText = ogData?.title || url;
  const descriptionText =
    description || ogData?.description || (!loading ? url : "");

  return (
    <div
      className={ct(
        "shadow-md cursor-pointer transition-all ease-out hover:shadow-lg duration-400 hover:scale-105 flex flex-col relative",
        className
      )}
      onClick={handleClick}
    >
      {note && (
        <div className="absolute w-full flex justify-center bg-zinc-800/70">
          <div
            className="text-sm font-bold text-zinc-50 line-clamp-1 break-all"
            title={note}
          >
            {note}
          </div>
        </div>
      )}
      <ShowImage
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        image={image || <FontAwesomeIcon icon={faLink} />}
      />
    </div>
  );
};

export default OGCard;
