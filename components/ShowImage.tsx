import { ct } from "../scripts/utils";

interface ShowImageProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string | null;
  imageAlt: string;
  image: React.ReactNode;
}

const ShowImage = ({
  className,
  imageSrc,
  imageAlt,
  image,
}: ShowImageProps) => {
  if (imageSrc) {
    return (
      <div className={ct("flex items-center justify-center", className)}>
        <img
          className="object-cover min-h-8 max-h-20"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    );
  } else {
    return (
      <div
        className={ct(
          "flex items-center justify-center text-5xl flex-1",
          className
        )}
      >
        {image}
      </div>
    );
  }
};

export default ShowImage;
