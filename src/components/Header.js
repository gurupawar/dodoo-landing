import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <span className="header__logo">
            {/* <img src={logo} alt="" /> */}
            DODOO
          </span>
          <a href="#dfg" className="header__download-btn btn">
            Log In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
