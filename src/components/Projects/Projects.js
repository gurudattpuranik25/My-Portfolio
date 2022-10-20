import React from "react";
import "./Projects.css";
import unveiled from "../../images/unveiled.JPG";
import blog from "../../images/blog.JPG";
import cornerCart from "../../images/cornerCart.JPG";
import todo from "../../images/todo.JPG";
import weather from "../../images/weather.JPG";
import { SiFirebase } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

function Projects() {
  return (
    <div className="projects">
      <div className="project__section">
        <h1 className="project__heading">Projects.</h1>

        <div className="project__list">
          <div className="project__description">
            <img src={unveiled} alt="" />
            <div className="project__details">
              <h1>Unveiled - Fashion App</h1>
              <p>
                Unveiled is an e-commerce application that sells clothes and
                other accessories that are both traditional and trendy. The
                application is built using React JS library and is completely
                responsive.
              </p>
              <div className="tech__stack">
                <span>
                  <FaReact />
                </span>
                <span>
                  <SiFirebase />
                </span>
                <span>
                  <SiTailwindcss />
                </span>
                <span>
                  <IoLogoCss3 />
                </span>
              </div>
              <div className="redirect__btn">
                <a
                  className="btn"
                  href="https://unveiled-ecommerce.netlify.app/"
                >
                  Demo
                </a>
                <a
                  className="btn"
                  href="https://github.com/gurudattpuranik25/unveiled-The-Fashion-App"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="project__description">
            <img src={blog} alt="" />
            <div className="project__details">
              <h1>Record : In & Out - Blog App</h1>
              <p>
                Record : In & Out is a fully functional and responsive blog app
                built using React JS. Users can post a blog based on the
                available category, filter and can even delete their personal
                blogs.
              </p>
              <div className="tech__stack">
                <span>
                  <FaReact />
                </span>
                <span>
                  <SiFirebase />
                </span>
                <span>
                  <SiTailwindcss />
                </span>
                <span>
                  <IoLogoCss3 />
                </span>
              </div>
              <div className="redirect__btn">
                <a
                  className="btn"
                  href="https://record-in-and-out.netlify.app/"
                >
                  Demo
                </a>
                <a
                  className="btn"
                  href="https://github.com/gurudattpuranik25/blog-app"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="project__description">
            <img src={cornerCart} alt="" />
            <div className="project__details">
              <h1>Corner Cart </h1>
              <p>
                Corner Cart is an e-commerce application similar to that of
                Amazon & is built using React JS and Tailwind CSS.
              </p>
              <div className="tech__stack">
                <span>
                  <FaReact />
                </span>
                <span>
                  <SiFirebase />
                </span>
                <span>
                  <SiTailwindcss />
                </span>
              </div>
              <div className="redirect__btn">
                <a className="btn" href="https://corner-cart.netlify.app/">
                  Demo
                </a>
                <a
                  className="btn"
                  href="https://github.com/gurudattpuranik25/corner-cart"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="project__description">
            <img src={todo} alt="" />
            <div className="project__details">
              <h1>ToDo App</h1>
              <p>A simple ToDo app that lets you add & delete your tasks.</p>
              <div className="tech__stack">
                <span>
                  <FaReact />
                </span>
                <span>
                  <IoLogoCss3 />
                </span>
              </div>
              <div className="redirect__btn">
                <a
                  className="btn"
                  href="https://gurudatt-puranik-todo-app.netlify.app/"
                >
                  Demo
                </a>
                <a
                  className="btn"
                  href="https://github.com/gurudattpuranik25/todo_app"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="project__description">
            <img src={weather} alt="" />
            <div className="project__details">
              <h1>Check Your Weather</h1>
              <p>
                Enter any city's name from around the world and get the weather
                data instantly. The application is built using React JS and open
                weather API.
              </p>
              <div className="tech__stack">
                <span>
                  <FaReact />
                </span>
                <span>
                  <SiFirebase />
                </span>
                <span>
                  <SiTailwindcss />
                </span>
              </div>
              <div className="redirect__btn">
                <a
                  className="btn"
                  href="https://check-your-weather-instantly.netlify.app/"
                >
                  Demo
                </a>
                <a
                  className="btn"
                  href="https://github.com/gurudattpuranik25/check-your-weather"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
