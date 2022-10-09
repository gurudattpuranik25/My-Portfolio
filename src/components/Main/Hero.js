import React from "react";
import "./Hero.css";
import devGif from "../../images/devGif.gif";

function Hero() {
  return (
    <div className="hero__section">
      <div>
        <img src={devGif} alt="hero image" className="hero__image" />
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
            Scroll for more <i class="fa-solid fa-arrow-down"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
