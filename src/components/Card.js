import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import "../styles/card.scss";

const Card = props => {
  let i = 0;
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(700px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const onClickHandler = event => {
    event.stopPropagation();
    set(state => !state);
    console.log(event.target);
  };
  console.log(props.image);
  return (
    <div className="card__box">
      <animated.div
        onClick={onClickHandler}
        className="card front"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          backgroundImage: `url("${props.image}")`,
          zIndex: flipped ? 0 : 5
        }}
      >
        <h4 className="card__title">{props.title}</h4>
      </animated.div>
      <animated.div
        onClick={onClickHandler}
        className="card back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          zIndex: flipped ? 5 : 0
        }}
      >
        <div className="card__content">
          {props.content}
          <div className="card__technologies">
            {props.technologies.map(item => {
              i++;
              return (
                <div className="technology" key={i}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="card__controls">
          <Button
            className="button button--orange"
            text="Live"
            href={flipped ? null : props.liveHref}
            blank={true}
          />
          <Button
            className="button button--orange m2"
            text="Code"
            href={flipped ? null : props.codeHref}
            blank={true}
          />
        </div>
      </animated.div>
    </div>
  );
};

export default Card;
