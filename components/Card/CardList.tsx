import React from "react";
import { Card } from "./Card";
import type { CardProps } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type CardListProps = {
  cards: CardProps[];
};

function CardList({ cards }: CardListProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-12 justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export { CardList };
