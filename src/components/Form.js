import React from "react";

export default function Form(props) {
  return (
    <div class="form">
      <form onSubmit={props.sendEmail}>
        <div class="fields">
          <div class="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div class="field">
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div class="field">
            <label class="message" for="message">
              Message
            </label>
            <textarea name="message" id="message" rows="4" required />
          </div>
        </div>
        <ul class="actions">
          <button class="join" type="submit">
            Send Message
          </button>
        </ul>
      </form>
    </div>
  );
}
