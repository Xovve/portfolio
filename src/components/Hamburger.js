import React from "react";
import "../styles/hamburger.scss";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      initiallyClicked: false
    };
  }

  onClickHandler = () => {
    this.setState({ isOpened: !this.state.isOpened, initiallyClicked: true });
  };

  renderHamburger() {
    if (!this.state.initiallyClicked) {
      return (
        <div className="hamburger" onClick={this.onClickHandler}>
          <span className="hamburger__line first" />
          <span className="hamburger__line second" />
          <span className="hamburger__line third" />
        </div>
      );
    } else {
      const hamburgerClasses = this.state.isOpened
        ? "hamburger opened"
        : "hamburger closed";
      return (
        <div className={hamburgerClasses} onClick={this.onClickHandler}>
          <span className="hamburger__line first" />
          <span className="hamburger__line second" />
          <span className="hamburger__line third" />
        </div>
      );
    }
  }

  render() {
    return <>{this.renderHamburger()}</>;
  }
}

export default Hamburger;
