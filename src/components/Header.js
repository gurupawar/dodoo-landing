import React from "react";
import logo from "../assets/logo-nospace.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <span className="header__logo">
            {/* <img src={logo} alt="" /> */}
            DODOO
          </span>
          <a href="#dfg" className="header__download-btn">
            Log In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
