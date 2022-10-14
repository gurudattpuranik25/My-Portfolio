import React from "react";
import "./Blogs.css";
import nodejs from "../../images/nodejs.JPG";
import propDrilling from "../../images/propDrilling.png";
import api from "../../images/api.jpg";

function Blogs() {
  return (
    <div className="blogs">
      <div
        // data-aos="zoom-in"
        // data-aos-duration="2000"
        className="blog__section"
      >
        <h1 className="blog__heading">Blogs.</h1>
        <div className="blog__list">
          <div className="blog__description">
            <img src={nodejs} alt="" />

            <div className="blog__details">
              <h1>Get started with Node JS</h1>
              <p>
                Node JS, as per the standard definition is an open-source and
                cross-platform runtime environment for executing JavaScript code
                outside a browser. The term runtime is used to indicate various
                custom functionalities like tools and libraries that is spe...
              </p>
              <div className="redirect__btn">
                <a
                  className="btn"
                  href="https://gurudattpuranik.hashnode.dev/get-started-with-node-js"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="blog__description">
            <img src={api} alt="" />

            <div className="blog__details">
              <h1>Everything you need to know about API</h1>
              <p>
                API stands for Application Programming Interface. It acts as a
                mediator and facilitates communication between two applications.
                An API is basically a set of rules/protocols which sends a
                request to a database and retrieves data from it. This
                mechanis....
              </p>
              <div className="redirect__btn">
                <a
                  className="btn"
                  href="https://gurudattpuranik.hashnode.dev/everything-you-need-to-know-about-api"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="blog__description">
            <img src={propDrilling} alt="" />

            <div className="blog__details">
              <h1>Prop-drilling, state management & useContext()</h1>
              <p>
                While working on applications in React, we generally encounter
                props which help us in extracting & rendering data across the
                components. We use props to keep ourselves away from the DRY (do
                not repeat) syndrome. During the course of our development....
              </p>
              <div className="redirect__btn">
                <a
                  className="btn"
                  href="https://gurudattpuranik.hashnode.dev/prop-drilling-state-management-usecontext"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
