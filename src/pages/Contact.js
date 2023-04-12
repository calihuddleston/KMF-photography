import React from "react";
import { Link } from "react-router-dom";
import Book from "./Booking";

export default function Contact() {
  return (
    <section id="contact-page">
      <div id="schedule-image"></div>
      <div id="schedule-section">
        <h2 id="schedulequestion">Want to Schedule?</h2>
        <button id="click"><Link to="/booking" element={<Book />} className="page-links">CLICK HERE</Link></button>
      </div>

      <div id="form">
        <form id="contact-form">
          <h1 id="contactme">Contact Me</h1>
          <input placeholder="Name" type="text" id="contact-name"></input>
          <input placeholder="Email" type="email" id="contact-email"></input>
          <textarea placeholder="Type your message here..." id="contact-textarea"></textarea>
          <input type="submit" placeholder="Send" id="sendbtn"></input>
        </form>
      </div>
    </section>
  );
}
