import React from "react";
import "../styles/social.scss";

const Social = () => {
  return (
    <div className="social__menu">
      <a className="social__link" href="https://github.com/Xovve">
        <span
          className="iconify gh"
          data-icon="ant-design:github-fill"
          data-inline="false"
        />
      </a>
      <a
        className="social__link"
        href="https://www.linkedin.com/in/maciej-sroka-18364615b/"
      >
        <span
          className="iconify linkedin"
          data-icon="ant-design:linkedin-fill"
          data-inline="false"
        />
      </a>
      <a className="social__link" href="mailto:sroka.maciej@o2.pl">
        <span
          className="iconify mail"
          data-icon="foundation:mail"
          data-inline="false"
        />
      </a>
    </div>
  );
};

export default Social;
