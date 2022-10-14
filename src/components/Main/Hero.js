import React, { useEffect } from "react";
import "./Hero.css";
import hero__image from "../../images/hero__image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="hero">
      <div
        // data-aos="zoom-in"
        // data-aos-duration="2000"
        className="hero__section"
      >
        <div className="hero__image">
          <img src={hero__image} alt="hero" />
        </div>
        <div className="hero__details">
          <p className="background__text">
            {" "}
            <span className="frontend">Frontend</span>{" "}
            <span className="developer">Developer</span>{" "}
          </p>
          <div className="self">
            <p className="salutation">Hello, it's me</p>
            <h1>Gurudatt Puranik</h1>
            <p className="self__description">
              An enthusiastic & self-motivated web developer wanting to make an
              impact on how the web looks by designing smooth and responsive
              user-interfaces that promote user interaction with information and
              data.
            </p>
            <p className="scroll">
              Scroll for more <i className="fa-solid fa-arrow-down"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
