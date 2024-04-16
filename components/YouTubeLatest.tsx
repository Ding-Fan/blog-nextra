import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  channelId: string;
};

const YouTubeLatest = ({ channelId }: Props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        // todo: use useSWR instead
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              channelId: channelId,
              order: "date",
              maxResults: 2,
              type: "video",
              key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
            },
          }
        );

        const latestVideoIds = [
          data.items[0].id.videoId,
          data.items[1].id.videoId,
        ];
        setVideos(latestVideoIds);
      } catch (error) {
        console.error("Error fetching the latest video:", error);
      }
    };

    fetchLatestVideo();
  }, [channelId]);

  return (
    <div>
      <div className="text-sm">latest videos:</div>
      {videos.length ? (
        videos.map((video) => (
          <div key={video} className="my-4">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YouTubeLatest;
