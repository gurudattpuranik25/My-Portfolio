import React from "react";
import "./Skills.css";
import "aos/dist/aos.css";
import skill from "../../images/skill.jpg";
import html from "../../images/html.png";
import css from "../../images/css.jpg";
import js from "../../images/js.png";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind.png";
import redux from "../../images/redux.png";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="skill">
      <div className="skill__title">Skills.</div>
      <div className="skill__section">
        <div className="skill__grid">
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="html skill__logo"
          >
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="css skill__logo"
          >
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="js skill__logo"
          >
            <img src={js} alt="" />
            <p>JavaScript</p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="react skill__logo"
          >
            <img src={react} alt="" />
            <p>React</p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="Tailwind skill__logo"
          >
            <img src={tailwind} alt="" />
            <p>Tailwind CSS</p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="redux skill__logo"
          >
            <img src={redux} alt="" />
            <p>Redux</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <img className="skill__image" src={skill} alt="" />
        </div>
      </div>
      <div className="nav__btn">
        <p>
          {" "}
          <Link className="go__to__links" to="/projects">
            View projects
          </Link>{" "}
        </p>
        <p>
          {" "}
          <Link className="go__to__links" to="/blogs">
            Read blogs
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Skills;
