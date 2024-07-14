import { CardList } from "./CardList";
import { Button } from "../Button";

const data = [
  {
    title: "Frontend",
    description: "Build user interfaces and user experiences for the web.",
    thumbnail: "/images/DumbThumbnail.jpeg",
    url: "https://mareta.codes/",
  },
];

function CardListContainer() {
  return <CardList cards={data} />;
}

export { CardListContainer };
