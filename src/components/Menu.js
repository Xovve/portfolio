import React from "react";
import Hamburger from "./Hamburger";
import LangSwitcher from "./LangSwitcher";
import { connect } from "react-redux";
import "../styles/menu.scss";

class Menu extends React.Component {
  render() {
    const classNames = this.props.isOpened ? "menu opened" : "menu";
    return (
      <div className={classNames}>
        <div className="container menu__container">
          <LangSwitcher />
          <Hamburger />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpened: state.isMenuOpened
  };
};

export default connect(mapStateToProps)(Menu);
