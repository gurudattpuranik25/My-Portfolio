import React from "react";
import education__img from "../../images/education__bg.jpg";
import "./Education.css";
import pencil from "../../images/pencil.JPG";

import "aos/dist/aos.css";

function Education() {
  return (
    <div className="education">
      <div className="education__title">Education.</div>
      <div className="education__section">
        <div
        // data-aos="fade-right" data-aos-duration="2000"
        >
          <img src={education__img} alt="" />
        </div>
        <div
          // data-aos="fade-left"
          // data-aos-duration="2000"
          className="education__details"
        >
          <div className="qualification">
            <div
            // data-aos="fade-right" data-aos-duration="1400"
            >
              <img className="pencil" src={pencil} alt="" />
            </div>
            <div>
              <h2>
                {" "}
                High-School - <span>89.3%</span>{" "}
              </h2>
              <p>Sri Sathya Sai Vidya Kendra - Muddenhalli, Karnataka</p>
              <p>2012-2015</p>
            </div>
          </div>
          <div className="qualification">
            <div
            // data-aos="fade-right" data-aos-duration="1400"
            >
              <img className="pencil" src={pencil} alt="" />
            </div>
            <div>
              <h2>
                Pre - University - <span>91.3%</span>{" "}
              </h2>
              <p>Sri Sathya Sai PU College - Muddenhalli, Karnataka</p>
              <p>2015-2017</p>
            </div>
          </div>
          <div className="qualification">
            <div
            // data-aos="fade-right" data-aos-duration="1400"
            >
              <img className="pencil" src={pencil} alt="" />
            </div>
            <div>
              <h2>
                BE, Mechanical Engineering - <span>81.5%</span>{" "}
              </h2>
              <p>Siddaganga Institute of Technology - Tumkur, Karnataka</p>
              <p>2017-2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
