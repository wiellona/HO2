import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

type CardProps = {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
};

function Card({ thumbnail, title, description, url }: CardProps) {
  return (
    <div className="card w-72 h-80 shadow-md rounded overflow-hidden">
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
      </div>
      <Link href={url}></Link>
    </div>
  );
}

export type { CardProps };
export { Card };
