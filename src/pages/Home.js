import React from "react";
import { Link } from "react-router-dom"
import { GiFlowerPot } from "react-icons/gi"
import { BsSuitHeart } from "react-icons/bs"
import captureImg from "../assets/captureImg.jpeg"
import beach from "../assets/beach.jpg"
import contactImg from "../assets/contactImg.jpeg"
import book from "../assets/book.jpeg"
import Slideshow from "../components/Slideshow";
import Contact from "./Contact";

export default function Home () {
    return (
        <section>
            <header></header>
      <div>
        <p className="quote">"A GOOD SNAPSHOT KEEPS</p>
        <p className="quote">A MOMENT FROM RUNNING AWAY"</p>
        <div id="box">
          <div id="border-bottom"></div>
        </div>
        <p className="quote title">Family, Portrait, & Wedding Photography</p>
      </div>
            <div id="section-one">
                <img src={beach} height="900px"></img>
                <div id="capture">
                    <p id="three">Love. Stories. Memories.</p>
                    <img src={captureImg} height="300px"></img>
                    <p className="capture-para">LIFE IS SHORT </p>
                    <span><GiFlowerPot />Capture <GiFlowerPot /></span> 
                       <p className="capture-para"> EVERY MOMENT</p>
                </div>
            </div>

            <div id="section-two">
                <div id="memories">
                <p>The thing I like about photographs, is the memories they hold. <BsSuitHeart /></p>
                </div>
                <Slideshow />
            </div>
            <figure className="text-end block">
                <blockquote className="blockquote quotation">"Do not follow where the path may lead. Go instead where there is no path and leave a trail."</blockquote>
                <figcaption className="blockquote-footer author">Ralph Waldo Emerson</figcaption>
            </figure>
            <div id="section-three">
                <div>
                    <img src={book} height="500px"></img>
                </div>
                <div id="about-section">
                    <h2 id="welcome">WELCOME, MY NAME IS <span>Mackenzie</span></h2>
                    <p id="description">I'm a self taught photographer. Learning and growing every second I possibly can! Want to learn more and hear about my story click the button below and I'll run you down memory lane!</p>
                    <div>
                    <button id="morebtn"><a>MORE ABOUT ME</a></button>
                    </div>
                </div>
            </div>

            <div id="section-four">
                <div id="contact-section">
                    <p id="adventure">ARE YOU READY FOR YOUR NEXT ADVENTURE?</p>
                    <div>
                    <button id="contactbtn"><Link to="/contact" element={<Contact />} className="page-links">CONTACT ME</Link></button>
                    </div>
                </div>
                <div>
                    <img src={contactImg} height="700px"></img>
                </div>
            </div>
        </section>
    )
}