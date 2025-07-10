import ICONS from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faChalkboardUser,
  faCloudBolt,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faBluesky,
  faDiscord,
  faGithub,
  faGoogle,
  faSpotify,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import IconImage from "components/image/IconImage";
import { createClient } from "utils/supabase/client";

interface DB_Link extends Link {
  icon_url: string;
  icon_name: string;
}

const FA_ICONS = {
  faAmazon: <FontAwesomeIcon icon={faAmazon} className="text-yellow-500" />,
  faSpotify: <FontAwesomeIcon icon={faSpotify} className="text-green-600" />,
  faYoutube: <FontAwesomeIcon icon={faYoutube} className="text-red-600" />,
  faGithub: <FontAwesomeIcon icon={faGithub} className="text-gray-600" />,
  faGoogle: <FontAwesomeIcon icon={faGoogle} className="text-blue-400" />,
  faDiscord: <FontAwesomeIcon icon={faDiscord} className="text-purple-700" />,
  faTelegram: <FontAwesomeIcon icon={faTelegram} className="text-blue-500" />,
  faBluesky: <FontAwesomeIcon icon={faBluesky} className="text-blue-300" />,
  faBookAtlas: (
    <FontAwesomeIcon icon={faBookAtlas} className="text-orange-500" />
  ),
  faChalkboardUser: (
    <FontAwesomeIcon icon={faChalkboardUser} className="text-green-600" />
  ),
  faCloudBolt: (
    <FontAwesomeIcon icon={faCloudBolt} className="text-yellow-500" />
  ),
  faTriangleExclamation: (
    <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500" />
  ),
};

async function getLinks(): Promise<DB_Link[]> {
  try {
    const supabase = await createClient();

    let { data: links, error } = await supabase.from("links").select("*");

    if (error) {
      console.error(error);
      return [];
    }

    return links || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function HomePageLinksFromDb() {
  const links = await getLinks();

  const getImage = (link: DB_Link) => {
    let result;

    if (link.icon_url) {
      result = (
        <IconImage
          iconStyle="contained"
          src={link.icon_url}
          alt={link.note || link.url}
        />
      );
    } else if (FA_ICONS[link.icon_name]) {
      result = FA_ICONS[link.icon_name];
    } else {
      result = ICONS[link.icon_name];
    }

    return result;
  };

  return links.map((link) => ({
    url: link.url,
    note: link.note,
    image: getImage(link),
    tags: link.tags,
    weight: link.weight,
  }));
}
