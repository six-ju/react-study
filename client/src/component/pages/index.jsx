import React from "react";
import CardList from "../organism/cardList/cardList";
import { notice, price, support } from "../../common/theme/card";

const NoticePage = () => {
  return (
    <div>
      <CardList cards={notice} />
      <CardList cards={price} />
      <CardList cards={support} />
    </div>
  );
};
export default NoticePage;
