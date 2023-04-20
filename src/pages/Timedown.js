import { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"

const Timedown = ({ date }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(date) - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

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
    <div id="time-down-section">
        <div id="count-down-header">
   
        </div>
        
        <div id="count-down">
                <div id="count-text">
                    <h2 id="count-title">Coming Soon!</h2>  
                    <p>Welcome, I am so excited to share my new website with you. We are currently working on creating the best experience for you so please stay tuned! If you have any questions or concerns please contact me below.</p>
                </div>
                <div id="time-row">
                    <div className="time">
                        <p className="time-stamp">Days:</p>
                        <p>{days}</p>
                    </div>
                    <div className="time">
                        <p className="time-stamp">Hours:</p>
                        <p>{hours}</p>
                    </div>
                    <div className="time">
                        <p className="time-stamp">Minutes:</p>
                        <p>{minutes}</p>
                    </div>
                    <div className="time">
                        <p className="time-stamp">Seconds:</p>
                        <p>{seconds}</p>
                    </div>
                </div>
        </div>
        <div id="concerns">
            <h2 id="concern-title">Questions or Concerns?</h2>
            <h4>Contact Me Here</h4>
            <div id="form">
        <form id="contact-form" onSubmit={submitForm}>
          <input placeholder="Name" type="text" id="contact-name" ref={name}></input>
          <input placeholder="Email" type="email" id="contact-email" ref={email}></input>
          <textarea placeholder="Type your message here..." id="contact-textarea" ref={message}></textarea>
          <input type="submit" placeholder="Send" id="sendbtn"></input>
        </form>
      </div>
        </div>
    </div>
  );
};

export default Timedown;