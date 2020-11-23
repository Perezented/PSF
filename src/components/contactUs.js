import React, { useState } from "react";
import BusinessHours from "./BusinessHours";
import Form from "./Form";
import Banner from "./Banner";
import ThankYouMessage from "./ThankYouMessage";

export default function Contact(props) {
  const [thankYouMessage, setThankYouMessage] = useState(false);

  return (
    <section className={props.classInfo} id={props.classInfo}>
      <Banner props={props.bannerInfo} />
      <ThankYouMessage props={thankYouMessage} />
      <div className="flex">
        <BusinessHours />
        <Form props={setThankYouMessage} classInfo={props.classInfo} />
      </div>
    </section>
  );
}
