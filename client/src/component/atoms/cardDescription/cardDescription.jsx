import React from "react";
import "./cardDescription.css";

const CardDescription = ({ description }) => {
  console.log(description);
  return <p className="cardDescription">{description}</p>;
};

export default CardDescription;
