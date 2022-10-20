import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__section">
        <div className="contact__heading">Let's chat.</div>
        <div className="contact__form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea cols="30" rows="9" placeholder="Message"></textarea>
          <button className="send">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
