import React from "react";
import "./cardImage.css";

const CardImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="cardImage"
    />
  );
};

export default CardImage;
