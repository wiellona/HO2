import React, { useEffect, useState } from "react";
import { CardList } from "./Card/CardList";
import { Card, type CardProps } from "./Card";

function FetchFun() {
  const [data, setData] = useState<CardProps[]>([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://sistech-server.vercel.app/api/data"
      );
      const json = await response.json();

      setData(
        json.data.map((item: any) => ({
          thumbnail: item.imgUrl,
          title: item.course,
          description: item.description,
          url: item.imgUrl,
        }))
      );
      console.log("data:", json.data.imgUrl);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-white">
      <CardList cards={data} />
    </div>
  );
}

export default FetchFun;
