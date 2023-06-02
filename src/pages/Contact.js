import React, {useRef} from "react";
import { Link } from "react-router-dom";
import Book from "./Booking";
import emailjs from "@emailjs/browser"

export default function Contact() {

  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitted")
    emailjs
        .send(
            "service_irxj2nw",//serviceID (the emailJS account you want to use)
            "template_du8dt2g",//templateID (the template, saved on your emailJS account, that you want to use)
            {  //templateParams (the values you want fed into that template - names must match those on the template)
              name: name.current.value,
              email: email.current.value,
              message: message.current.value,
            },
            "VJ7AN38eOcKTQ89-7" //public key - optional, can be set with emailjs.init()
        )
  }

  return (
    <section id="contact-page">
      <div id="schedule-image"></div>
      <div id="schedule-section">
        <h2 id="schedulequestion">Want to Schedule?</h2>
        <button id="click"><Link to="/booking" element={<Book />} className="page-links">CLICK HERE</Link></button>
      </div>

      <div id="form">
        <form id="contact-form" onSubmit={submitForm}>
          <h1 id="contactme">Contact Me</h1>
          <input placeholder="Name" type="text" id="contact-name" ref={name}></input>
          <input placeholder="Email" type="email" id="contact-email" ref={email}></input>
          <textarea placeholder="Type your message here..." id="contact-textarea" ref={message}></textarea>
          <input type="submit" placeholder="Send" id="sendbtn"></input>
        </form>
      </div>
    </section>
  );
}
