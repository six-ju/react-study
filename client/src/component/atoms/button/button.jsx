import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
