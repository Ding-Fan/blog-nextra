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
  ...props
}: ShowImageProps) => {
  if (imageSrc) {
    return (
      <div
        className={ct("flex items-center justify-center", className)}
        {...props}
      >
        <div className="h-full aspect-square">
          <img
            className="object-contain w-full h-full "
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={ct("flex items-center justify-center text-3xl", className)}
        {...props}
      >
        {image}
      </div>
    );
  }
};

export default ShowImage;
