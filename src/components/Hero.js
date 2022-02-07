import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h1 className="hero__heading">
            <span className="lineOne">Anything you request</span> dodoo will do
            it <span className="lineThree">for you</span>
          </h1>
          <p>
            Travelling all the way just to locate a local vegetable store, or
            are you a meat lover? Struggling to find an operational courier
            service in your locality? Need help finding a ride to travel,
            instantly?
          </p>
          <a href="#dfg" className="hero__btn btn">
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
