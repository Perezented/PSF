import React from "react";
import emailjs from "emailjs-com";

export default function Form(props) {
  console.log("form props: ", props);
  function sendEmail(e) {
    e.preventDefault();
    setTimeout(() => {
      // setThankYouMessage(false);
    }, 6000);
    // setThankYouMessage(true);
    emailjs
      .sendForm(
        "service_xdxjlgs",
        "template_v0pftvj",
        e.target,
        "user_2WocCOhmC4a9o4yO5bwUB"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="form">
      <h3>
        {props.classInfo === "contact" ? "Let's Get in Touch" : "Join Our Team"}
      </h3>
      <form onSubmit={sendEmail}>
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div className="field">
            <label className="message" htmlFor="message">
              Message
            </label>
            <textarea name="message" id="message" rows="4" required />
          </div>
        </div>
        <ul className="actions">
          <button className="join" type="submit">
            Send Message
          </button>
        </ul>
      </form>
    </div>
  );
}