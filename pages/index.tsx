import { CardListContainer } from "@/components/Card/CardListContainer";
import { Button, Card, Header, Hero, Footer } from "../components";
import "./global.css";
import { CardList } from "@/components/Card/CardList";
import Head from "next/head";
import { CourseList } from "@/components/Card/CourseList";
import FetchFun from "@/components/FetchFun";
export default function Page() {
  return (
    <div className="h-full bg-primary">
      <Header></Header>
      <Hero></Hero>
      <div className="px-4">
        <h1
          className="text-4xl font-bold px-48 p-12 pt-20 text-center"
          id="roles"
        >
          Roles
        </h1>

        <CardListContainer />
      </div>

      <div className="pb-8 px-4">
        <h1
          className="text-4xl font-bold px-48 p-12 pt-20 text-center"
          id="courses"
        >
          Courses
        </h1>
        <CourseList />
      </div>

      <div className="pb-8 px-4">
        <h1
          className="text-4xl font-bold px-48 p-12 pt-20 text-center"
          id="videos"
        >
          Videos
        </h1>
        <FetchFun />
      </div>

      <Footer></Footer>
    </div>
  );
}
