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
      {props.text}
      <span
        className="iconify"
        data-icon="dashicons:arrow-right-alt2"
        data-inline="false"
      />
    </a>
  );
};

export default Button;
