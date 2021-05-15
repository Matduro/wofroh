import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

import "./ContactForm.css";

export default function ContactUs() {
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbk0d8p",
        "template_3ep5ivc",
        e.target,
        "user_AmUSQfuc9aWfr3c8hC9kB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="input-areas">
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          className="footer-input"
          name="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value="Subscribe"
          type="submit"
          buttonStyle="btn--outline"
          name="Subscribe"
        />
      </form>
    </div>
  );
}
