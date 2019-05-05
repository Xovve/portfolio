import React from "react";
import "../styles/buttons.scss";

const Button = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text} <i class="fas fa-chevron-right" />
    </button>
  );
};

export default Button;
