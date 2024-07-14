import { CardListContainer } from "@/components/Card/CardListContainer";
import { Button, Card, Header, Hero, Footer } from "../components";
import "./global.css";
import { CardList } from "@/components/Card/CardList";
import Head from "next/head";
export default function Page() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div>
        <h1
          className="text-4xl font-bold px-48 p-12 pt-32 text-center"
          id="roles"
        >
          Roles
        </h1>

        <CardListContainer />
      </div>

      <div className="mb-64">
        <h1
          className="text-4xl font-bold px-48 p-12 pt-32 text-center"
          id="courses"
        >
          Courses
        </h1>
        <CardListContainer />
      </div>
      <Footer></Footer>
    </>
  );
}
