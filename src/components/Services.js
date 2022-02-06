import React from "react";
import services1 from "../assets/services-1.svg";
import services2 from "../assets/services-2.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section__title services__title">
          Services <span>Dodoo</span>
          <br /> Provide
        </h2>
        <div className="services__cards">
          <div className="services__cards-card">
            <div className="services__cards-card-left">
              <ul>
                <li>
                  Cooking essentials: Order safe & healthy food stuff, fresh
                  fruits & vegetables, groceries & get them delivered to your
                  doorstep super fast, even at distant locations.
                </li>
                <li>
                  Dairy & meat: Get readily available fresh milk, milk products,
                  eggs, fish, chicken, mutton & seafood, cut as per requirements
                  & delivered.
                </li>
                <li>
                  Doctor appointment: Book doctor appointments in advance with a
                  single click.
                </li>
              </ul>
            </div>
            <div className="services__cards-card-right">
              <img src={services1} alt="" />
            </div>
          </div>
          <div className="services__cards-card">
            <div className="services__cards-card-right">
              <img src={services2} alt="" />
            </div>
            <div className="services__cards-card-left">
              <ul>
                <li>
                  Travel easy: Easy access to find & book cheap, affordable cab,
                  auto, bike instantly to travel.
                </li>
                <li>
                  Pickup & drop: Send & receive articles across the town or
                  nearby areas.
                </li>
                <li>
                  Personal services: Get beautician & make-up artist services or
                  even professional salon services & tailoring, now at your
                  doorstep.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
