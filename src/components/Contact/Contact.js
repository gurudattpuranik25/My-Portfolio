import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vwpuqgv",
        "template_me1gf89",
        form.current,
        "QVr_TGNDSPGfMfxrI"
      )
      .then(
        (result) => {
          alert("Thank you for your messaage.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__section">
        <div className="contact__heading">Let's chat.</div>
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" cols="30" rows="5" required />

          <button type="submit" value="Send">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
