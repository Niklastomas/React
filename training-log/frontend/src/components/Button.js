import React from "react";
import "./Button.css";

function Button({ title, onClick }) {
  return (
    <div onClick={onClick} className="button">
      <h3>{title}</h3>
    </div>
  );
}

export default Button;
