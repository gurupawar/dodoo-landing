import React from "react";
import { login, selectItems, subscribe, status } from "../assets/index";

const HowtoOrder = () => {
  return (
    <section className="howToOrder">
      <div className="container">
        <h2 className="section__title services__title">
          <span>How</span> and <span>What</span> you <br /> can order?
        </h2>
        <div className="howToOrder__step">
          <div className="howToOrder__step__wrapper">
            <div className="howToOrder__step-content shadow">
              <span>Step 1 - Login</span>
              <img src={login} alt="" />
            </div>
            <div className="howToOrder__step-content shadow">
              <span>Step 2 - Select Items</span>
              <img src={selectItems} alt="" />
            </div>
          </div>
          <div className="howToOrder__step__wrapper">
            <div className="howToOrder__step-content shadow">
              <span>Step 3 - Subscribe Items</span>
              <img src={subscribe} alt="" />
            </div>
            <div className="howToOrder__step-content shadow">
              <span>Step 4 - Place Order</span>
              <img src={status} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowtoOrder;
