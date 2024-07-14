import { CardList } from "./CardList";
import { Button } from "../Button";

const data = [
  {
    title: "Frontend",
    description: "Build user interfaces and user experiences for the web.",
    thumbnail: "/images/fe.jpg",
    url: "https://roadmap.sh/frontend",
  },
  {
    title: "Backend",
    description:
      "Develop server-side logic, database integration, and API connectivity.",
    thumbnail: "/images/be.jpg",
    url: "https://roadmap.sh/backend",
  },
  {
    title: "Full Stack",
    description:
      "Master both frontend and backend development for a comprehensive.",
    thumbnail: "/images/fs.jpg",
    url: "https://roadmap.sh/full-stack/",
  },
  {
    title: "Data Scientist",
    description: "Protect computer systems and networks from cyber threats.",
    thumbnail: "/images/ds.jpg",
    url: "https://roadmap.sh/ai-data-scientist",
  },
  {
    title: "Cyber Security",
    description:
      "Master both frontend and backend development for a comprehensive.",
    thumbnail: "/images/cs.jpg",
    url: "https://roadmap.sh/cyber-security",
  },
];

function CardListContainer() {
  return <CardList cards={data} />;
}

export { CardListContainer };
