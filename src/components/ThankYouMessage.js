import React from "react";

export default function ThankYouMessage(props) {
  return props.thankYouMessage === true ? (
    <h4 style={{ opacity: 1 }}>Thank You, Your message has been recieved!</h4>
  ) : (
    <h4 style={{ opacity: 0 }}>You should not be able to see me</h4>
  );
}
