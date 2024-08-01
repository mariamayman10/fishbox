import React from "react";
import "../../../CSS/Home.css";

const ItemS5 = ({ img, p1, p2, fadeOut }) => {
  return (
    <>
        <div
          className={`section5-item px-lg-5 px-md-4 px-sm-3 px-4 ${
            fadeOut ? "fade-out" : ""
          }`}
        >
          <div className="section5-flex row col-lg-10 col-md-10 col-sm-12 col-12 m-auto justify-content-between align-content-center">
            <div
              className={`section5-pars col-lg-5 col-md-5 col-sm-6 col-12 mb-3 align-self-center ${
                fadeOut ? "fade-out" : "slide-in-left"
              }`}
            >
              <p className="section5-p1">{p1}</p>
              <p className="section5-p2">{p2}</p>
              <button className="section5-btn">Get offer!</button>
            </div>
            <div
              className={`section5-divs row col-lg-7 col-md-7 col-sm-6 col-12 p-0 justify-content-end ${
                fadeOut ? "fade-out" : "slide-in-right"
              }`}
            >
              <div
                className="container col-lg-8 col-md-9 col-sm-11 col-8 p-0 m-0"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
        </div>
    </>
  );
};

export default ItemS5;