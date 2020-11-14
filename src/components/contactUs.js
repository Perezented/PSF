import emailjs from "emailjs-com";
import React, { useState } from "react";
import BusinessHours from "./BusinessHours";
import Form from "./Form";
import Banner from "./Banner";
import ThankYouMessage from "./ThankYouMessage";

export default function Contact() {
  const [thankYouMessage, setThankYouMessage] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    setTimeout(() => {
      setThankYouMessage(false);
    }, 6000);
    setThankYouMessage(true);
    emailjs
      .sendForm
      // "service_r5la9ln", // REPLACE ME
      // "template_h2o3mrf", // REPLACE ME
      // e.target,
      // "user_2WocCOhmC4a9o4yO5bwUB" // REPLACE ME
      ()
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
    <section className="contact" id="contact">
      <Banner />
      <h2>Contact Pro-Select Flooring</h2>
      <p>
        Let us know if there is anything we can do for you and your company. Use
        the form below to get a hold of us directly through the email.
      </p>
      <ThankYouMessage props={thankYouMessage} />
      <div className="flex">
        <BusinessHours />
        <Form props={sendEmail} />
      </div>
    </section>
  );
}
