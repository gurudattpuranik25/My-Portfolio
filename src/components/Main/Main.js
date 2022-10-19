import React from "react";
import About from "./About";
// import Education from "./Education";
import Hero from "./Hero";
import "./Main.css";
import Skills from "./Skills";

function Main() {
  return (
    <div className="main__container">
      <Hero />
      <About />
      {/* <Education /> */}
      <Skills />
    </div>
  );
}

export default Main;
