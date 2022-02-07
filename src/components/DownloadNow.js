import React from "react";
import { playstore, ios } from "../assets/index";

const DownloadNow = () => {
  return (
    <section className="downloadNow downloadNow__title">
      <h2 className="section__title services__title">
        Download now on <br />
        <span>Playstore</span> and <span>IOS</span>
      </h2>
      <div className="downloadNow__buttons">
        <a href="#">
          <img src={playstore} alt="" />
        </a>
        <a href="#">
          <img src={ios} alt="" />
        </a>
      </div>
    </section>
  );
};

export default DownloadNow;
