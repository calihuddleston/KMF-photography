import React from "react";
import { Link } from "react-router-dom";
import { testimonials1, testimonials2, testimonials3, testimonials4, testimonials5, testimonials6, testimonials7, testimonials8 } from "../assets";
import About from "./About";
import Contact from "./Contact";

export default function Testimonials () {
    return (
        <section>
            <div id="testimonials-section-one">
                <h2><span>Love Notes</span> From People I've Photographed ♡</h2>
                <img src={testimonials1} width="470px" height="540px" id="testimonials-Img1"></img>
            </div>
            <div id="testimonials-section-two">
                <div>
                    <h5>TESTIMONIALS</h5>
                </div>
                <div className="testimonial">
                    <h1>Haley</h1>
                    <img src={testimonials2} width="250px"></img>
                    <p className="testimonial-paragraph">"Kenzie is the best photographer! She's so genuine and easy/fun to work with. Her work is phenomenal and she never gives anything but her best! She will go above and beyond for her clients. If you're looking for any type of pictures, she's your girl!</p>
                </div>
                <div className="testimonial">
                    <img src={testimonials3} width="350px"></img>
                    <h1>Kelli</h1>
                    <p className="testimonial-paragraph">"My grandparents won the cutest couple contest with Mackenzie. My grandma just beat cancer and from all her Chemotherapy she has a hard time getting around, she can't walk very well or fast because she's always in so much pain. Mackenzie drove an hour away to my grandparents house, took every minute that my grandma needed, asked her multiple times if she needed help, and tried to be the best help she could be so she could do these pictures. Mackenzie made my grandma & grandpa laugh & smile...</p>
                </div>
                <div className="testimonial">
                    <h1>Deanna</h1>
                    <img src={testimonials4} width="250px"></img>
                    <p className="testimonial-paragraph">"Mackenzie is an amazing photographer. You can see the passion she has for what she does. I am very grateful that she was easy to work with. I even stepped out of my comfort zone with my pictures and she made me feel great. We will definitely be booking more sessions with Kenzie Marie Photography!</p>
                </div>
                <div className="testimonial">
                    <img src={testimonials5} width="350px"></img>
                    <h1>Cesaleigh</h1>
                    <p className="testimonial-paragraph">"Kenzie made every experience worth it and fun for us! She's beyond amazing with working with children, and how to get the right picture! She is very helpful with poses & the best idea for a picture. Very accommodating! <br/> You get what you pay for! Most definitely recommend ♡"</p>
                </div>
            </div>
            <div id="testimonials-section-three">
                <div className="testimonial">
                    <h1>Cali</h1>
                    <img src={testimonials6} width="250px"></img>
                    <p className="testimonial-paragraph">"Kenzie has been doing my pictures for a few years now and has always been amazing! She always makes you feel comfortable, relaxed, and ensures you enjoy your time and pictures taken! She has great attention to detail and is overall a great photographer!! Highly recommend</p>
                </div>
                <div className="testimonial">
                    <img src={testimonials7} width="250px"></img>
                    <h1>Amber & Cody</h1>
                    <p className="testimonial-paragraph">"Kenzie was so patient with our family during the session. She made us feel comfortable, I'm excited to see what she captured!"</p>
                </div>
                <div className="testimonial">
                    <h1>The Stones</h1>
                    <img src={testimonials8} width="350px"></img>
                    <p className="testimonial-paragraph">"Kenzie did a phenomenal job with our engagement pictures. She captured the genuine smiles, our quirkiness and more importantly our love. She was very attentive, patient, creative and more than willing to do anything in her power to capture the perfect image. I cannot wait to see our wedding pictures. Thank you so much again! <br/> -The Stones"</p>
                </div>
            </div>
            <div id="wedding-footer">
                <div>
                    <Link className="page-links" to="/about" element={<About />}><span>About Me</span> <br/> GET TO KNOW ME</Link>
                </div>
                <div id="wedding-break"></div>
                <div>
                    <Link className="page-links" to="/contact" element={<Contact />}><span>Contact Me</span> <br/> GET IN TOUCH</Link>
                </div>
            </div>
        </section>
    )
}