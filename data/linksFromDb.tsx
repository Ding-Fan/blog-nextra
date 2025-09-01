import ICONS from "./icons";
import IconImage from "components/image/IconImage";
import DynamicIcon from "components/DynamicIcon";
import { createClient } from "utils/supabase/server";

interface DB_Link extends Link {
  icon_url: string;
  icon_name: string;
  tile_size: 'small' | 'medium' | 'wide' | 'large';
  position: number;
  tile_color: string;
  live_content: string;
}


async function getLinks(): Promise<DB_Link[]> {
  try {
    const supabase = createClient();

    let { data: links, error } = await supabase.from("b_links").select("*");

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
    if (link.icon_url) {
      return (
        <IconImage
          iconStyle="contained"
          src={link.icon_url}
          alt={link.note || link.url}
        />
      );
    } else if (link.icon_name && link.icon_name.startsWith('fa')) {
      // FontAwesome icon - use DynamicIcon
      return <DynamicIcon name={link.icon_name} />;
    } else if (link.icon_name && ICONS[link.icon_name]) {
      // Custom SVG icon from icons.tsx
      return ICONS[link.icon_name];
    } else {
      // Fallback to question mark if no icon found
      return <DynamicIcon name="faQuestion" />;
    }
  };

  return links.map((link) => ({
    url: link.url,
    note: link.note,
    image: getImage(link),
    tags: link.tags,
    weight: link.weight,
    tile_size: link.tile_size,
    position: link.position,
    tile_color: link.tile_color,
    live_content: link.live_content,
  }));
}
