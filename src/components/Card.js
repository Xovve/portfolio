import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/card.scss";

const Card = props => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(700px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div className="card__box">
      <animated.div
        onClick={() => set(state => !state)}
        className="card front"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <h4 className="card__title">{props.title}</h4>
      </animated.div>
      <animated.div
        onClick={() => set(state => !state)}
        className="card back"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      />
    </div>
  );
};

export default Card;
