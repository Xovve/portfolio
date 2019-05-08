import React from "react";
import LangSwitcher from "./LangSwitcher";
import Hamburger from "./Hamburger";
import { connect } from "react-redux";
import "../styles/menu.scss";

class Menu extends React.Component {
  render() {
    const classNames = this.props.isOpened
      ? "menu__slider opened"
      : "menu__slider";
    return (
      <div className="menu">
        <div className="menu__toggler">
          <Hamburger />
        </div>
        <div className={classNames}>
          <div className="container menu__container">
            <LangSwitcher />
          </div>
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
