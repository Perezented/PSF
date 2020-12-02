import React, { useState, useEffect } from "react";
import BusinessHours from "../sub/BusinessHours";
import Form from "../sub/Form";
import Banner from "../sub/Banner";
import ThankYouMessage from "../sub/ThankYouMessage";

export default function Contact(props) {
  const [thankYouMessage, setThankYouMessage] = useState(false);
  useEffect(() => {
    document.querySelectorAll("section div").forEach((value) => {
      value.classList.remove("opacityBottom");
    });
    document.querySelectorAll("p").forEach((value) => {
      value.classList.remove("opacityBottom");
    });
  }, []);
  return (
    <section className={props.classInfo + " fade"} id={props.classInfo}>
      <Banner props={props.bannerInfo} />
      <ThankYouMessage props={thankYouMessage} />
      <div className="flex">
        <BusinessHours />
        <Form props={setThankYouMessage} classInfo={props.classInfo} />
      </div>
    </section>
  );
}
