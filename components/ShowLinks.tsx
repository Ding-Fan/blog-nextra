// ShowLinks.tsx
import React from 'react';
import OGCard from './OGCard';
import { HOMEPAGE_LINKS } from '../data';
import { groupLinksByTag } from '../scripts/utils';
import CardPost from './CardPost';
import { Link } from '../data/types';

const ShowLinks: React.FC = () => {
  const groupedLinks = groupLinksByTag(HOMEPAGE_LINKS);

  return (
    <div>
      {Object.keys(groupedLinks).map((tag) => (
        <CardPost className='mb-2' key={tag} post={{
          title: tag,
          content: <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {groupedLinks[tag].map((link: Link) => (
              <OGCard
                key={link.url}
                className="mb-2"
                url={link.url}
                note={link.note}
                image={link.image}
              />
            ))}
          </div>
        }} />
      ))}
    </div>
  );
};

export default ShowLinks;
