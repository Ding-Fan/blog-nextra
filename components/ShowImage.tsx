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
        <img
          className="object-cover min-h-8 max-h-20"
          src={imageSrc}
          alt={imageAlt}
        />
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

export default ShowImage;