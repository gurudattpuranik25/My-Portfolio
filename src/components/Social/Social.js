import React from "react";
import "./Social.css";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Social() {
  //   const gmailHandler = () => {
  //     window.location.href =
  //       "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gurudattpuranik35@gmail.com";
  //   };

  return (
    <div className="social">
      <div className="social__section">
        <a
          href="https://github.com/gurudattpuranik25"
          className="social__icons github"
        >
          <BsGithub />
        </a>
        <a
          href="https://twitter.com/PuranikGurudatt"
          className="social__icons twitter"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/"
          className="social__icons linkedin"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://gurudattpuranik.hashnode.dev/"
          className="social__icons hashnode"
        >
          <SiHashnode />
        </a>
        {/* <p className="social__icons mail" onClick={gmailHandler}> */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gurudattpuranik35@gmail.com"
          className="social__icons mail"
        >
          <MdEmail />
        </a>
        {/* </p> */}
      </div>
    </div>
  );
}

export default Social;
