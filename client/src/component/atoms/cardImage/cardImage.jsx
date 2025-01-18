import React from "react";
import "./cardImage.css";

const CardImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="cardImage"
      style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
    />
  );
};

export default CardImage;
