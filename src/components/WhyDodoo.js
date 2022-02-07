import React from "react";
import { gift, message, truck, shopping } from "../assets/index";

const WhyDodoo = () => {
  return (
    <section className="whydodoo">
      <div className="container">
        <div className="whydodoo__wrapper">
          <h2 className="section__title">
            Why <span>Dodoo</span>
          </h2>
          <div className="whydodoo__cards">
            <div className="whydodoo__cards-card">
              <img src={message} alt="" />
              <h3>Chat Anytime</h3>
              <p>Ai Driven dodoo chat anytime at your disposal 24/7.</p>
            </div>
            <div className="whydodoo__cards-card">
              <img src={truck} alt="" />
              <h3>Order Anything</h3>
              <p>
                Order as you wish hassle free and dodoo will knock your door in
                no time.
              </p>
            </div>
            <div className="whydodoo__cards-card">
              <img src={shopping} alt="" />
              <h3>Subscribe Anything</h3>
              <p>Subscribe anything as you wish Daily/Weeklyl/Monthly.</p>
            </div>
            <div className="whydodoo__cards-card">
              <img src={gift} alt="" />
              <h3>Pick up and Drop</h3>
              <p>
                You can request for pickup and drop of any item from one
                location to another.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDodoo;
