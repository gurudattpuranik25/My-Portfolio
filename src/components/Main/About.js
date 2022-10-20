import React from "react";
import "./About.css";
import about from "../../images/about.JPG";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      // data-aos="fade-up" data-aos-duration="2000"
      className="about"
    >
      <p className="about__title">About Me.</p>
      <div className="about__section">
        <div
          className="about__me"
          // data-aos="fade-down"
          // data-aos-duration="2000"
        >
          I am a 23-year-old <strong>blogger</strong>,
          <strong> stock-market trader</strong> and aspiring{" "}
          <strong>full-stack web developer</strong> . I love attractive designs,
          narrations and have developed interest in designing{" "}
          <strong>responsive web applications</strong> that make an impact. I am
          passionate, self-motivated, and always open to collaborate on exciting
          projects. I like to be{" "}
          <strong>driven by opprotunities & challenges</strong> and have the
          natural ability to adapt to situations.
          <br />I love working on new & innovative ideas & if you already have
          one in your mind, let's talk and we can build something unique.
          <p className="contact__btn">
            <Link className="contact__link" to="/contact">
              Contact &nbsp; 📞
            </Link>
          </p>
        </div>
        <div
        // data-aos="fade-up" data-aos-duration="2000"
        >
          <img src={about} alt="" />
        </div>
      </div>
      ;
    </div>
  );
}

export default About;
