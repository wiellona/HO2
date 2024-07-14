import { CardListContainer } from "@/components/Card/CardListContainer";
import { Button, Card, Header } from "../components";
import "./global.css";
import { CardList } from "@/components/Card/CardList";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Header></Header>
      <CardListContainer />
    </>
  );
}
