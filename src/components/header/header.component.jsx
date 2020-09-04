import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/blueberry.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="name">BLUE CLOTHING</div>
    <div className="options">
      <Link to="/shop" className="option">SHOP</Link>
      <Link className="option">CONTACT</Link>
    </div>
  </div>
);

export default Header;
