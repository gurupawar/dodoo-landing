import React from "react";

const GetInTouch = () => {
  return (
    <section className="getInTouch">
      <div className="container">
        <h2 className="section__title services__title">
          Get in <span>Touch</span> you
        </h2>
        <div className="getInTouch__box shadow">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea
            type="text"
            placeholder="Something goes here..."
            cols={3}
            required
          />
          <div className="getInTouch__btn btn">Submit</div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
