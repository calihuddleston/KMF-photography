import React from "react";

export default function Contact() {
  return (
    <section id="contact-page">
      <div id="schedule-section">
        <h2 id="schedulequestion">Want to Schedule?</h2>
        <button id="click"><a>CLICK HERE</a></button>
        </div>

      <div id="form">
        <form>
        <h1 id="contactme">Contact Me</h1>
          <input placeholder="Name" type="text"></input>
          <input placeholder="Email" type="email"></input>
          <textarea placeholder="Type your message here..."></textarea>
          <button id="sendbtn">SEND</button>
        </form>
      </div>
    </section>
  );
}
