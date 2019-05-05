import React from "react";
import { connect } from "react-redux";
import { toggleMenu } from "../actions";
import "../styles/hamburger.scss";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initiallyClicked: false
    };
  }

  onClickHandler = () => {
    this.props.toggleMenu();
    this.setState({ initiallyClicked: true });
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
      const hamburgerClasses = this.props.isOpened
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

const mapStateToProps = state => {
  return { isOpened: state.isMenuOpened };
};

export default connect(
  mapStateToProps,
  { toggleMenu }
)(Hamburger);
