import React from "react";

export default function Form(props) {
  return (
    <div className="form">
      <form onSubmit={props.sendEmail}>
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
