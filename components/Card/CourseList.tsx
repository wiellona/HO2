import { CardList } from "./CardList";
import { Button } from "../Button";

const data = [
  {
    title: "Responsive Web Design",
    description: "HTML, CSS",
    thumbnail: "/images/RS.jpg",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  },
  {
    title: "Backend Dev and APIs",
    description: "Node.js, npm",
    thumbnail: "/images/API.jpg",
    url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
  },
  {
    title: "Machine Learning",
    description: "Tensorflow, neural networks",
    thumbnail: "/images/ml.jpg",
    url: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
  },
];

function CourseList() {
  return <CardList cards={data} />;
}

export { CourseList };
