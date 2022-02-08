import { useState } from "react";
import "./Button.css";

const Button = ({ text, bgColor, msg }) => {
  const [message, setMessage] = useState("");
  const btnClick = () => {
    setMessage(msg);
  };

  // console.log(message)
  return (
    <>
      {message ? <h3 style={{ color: bgColor }}>{message}</h3> : ""}
      <button
        className="btn"
        style={{
          backgroundColor: bgColor,
          padding: ".6rem 1.3rem",
          color: "white",
          cursor: "pointer",
          border: "0",
          fontFamily: "sans-serif"
        }}
        onClick={btnClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
