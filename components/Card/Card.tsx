import Image from "next/image";
import { Button } from "../Button";

type CardProps = {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
};

function Card({ thumbnail, title, description, url }: CardProps) {
  return (
    <div className="card w-72 h-80 shadow-md rounded overflow-hidden mb-2">
      <Image
        src={thumbnail}
        alt={title}
        className="object-cover w-full h-36"
        width={250}
        height={150}
      />
      <div className="bg-darkgrey p-1">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Button url={url}>Learn more</Button> {/* Changed here */}
      </div>
    </div>
  );
}

export type { CardProps };
export { Card };
