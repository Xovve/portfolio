import React from "react";
import "../styles/buttons.scss";

const Button = props => {
  return (
    <a
      className={props.className}
      onClick={props.onClick}
      href={props.href}
      target={props.blank ? "_blank" : ""}
    >
      {props.text} <i className="fas fa-chevron-right" />
    </a>
  );
};

export default Button;
