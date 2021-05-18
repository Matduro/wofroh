import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./ContactForm.css";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

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
          setOpen(true);
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
        <Snackbar
          className="snackbar"
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success">
            Thank you for subscribing. Be sure to check your email!
            </Alert>
        </Snackbar>
      </form>
    </div>
  );
}
