import React from "react";
import { Link } from "react-router-dom"
import { GiFlowerPot } from "react-icons/gi"
import { BsSuitHeart } from "react-icons/bs"
import {captureImg, beach, contactImg, shoot, line, featureOne, featureTwo, featureThree, featureFour} from "../assets";
import Slideshow from "../components/Slideshow";
import Contact from "./Contact";
import About from "./About";

export default function Home () {
    return (
        <main>
            <header>
            <div>
                    <p className="quote">"A GOOD SNAPSHOT KEEPS</p>
                    <p className="quote">A MOMENT FROM RUNNING AWAY"</p>
                    <div id="box">
                    <div id="border-bottom"></div>
                    </div>
                    <p className="quote title">Family, Portrait, & Wedding Photography</p>
                </div>
            </header>
    
            <section id="section-one">
                <img src={beach} width="1350px" id="test-image"></img>
                <div id="capture">
                    <p id="three">Love. Stories. Memories.</p>
                    <img src={captureImg} height="300px"></img>
                    <p className="capture-para">LIFE IS SHORT </p>
                    <span><GiFlowerPot />Capture <GiFlowerPot /></span> 
                       <p className="capture-para"> EVERY MOMENT</p>
                </div>
            </section>

            <section id="section-two">
                <div id="memories">
                <p>The thing I like about photographs, is the memories they hold. <BsSuitHeart /></p>
                </div>
                <Slideshow />
            </section>
            <figure className="text-end block">
                <blockquote className="blockquote quotation">"Do not follow where the path may lead. Go instead where there is no path and leave a trail."</blockquote>
                <figcaption className="blockquote-footer author">Ralph Waldo Emerson</figcaption>
                <img src={line} alt="" className="background-image" />
            </figure>
            <section id="section-three">
            {/* <div id="background-white"></div> */}
                <div>
                    <img src={shoot} height="900px"></img>
                    
                </div>
                <div id="about-section">
                    <h2 id="welcome">WELCOME, MY NAME IS <span>Mackenzie</span></h2>
                    <p id="description">I'm a self taught photographer. Learning and growing every second I possibly can! Want to learn more and hear about my story click the button below and I'll run you down memory lane!</p>
                    <div>
                    <button id="morebtn"><Link to="/about" element={<About />} className="page-links">MORE ABOUT ME</Link></button>
                    </div>
                </div>
            </section>

            <div id="featured">
                <div id="featured-text">
                    <h2 id="as-featured">As Featured In...</h2>
                </div>
                <div id="featured-images">
                    <img src={featureOne} height="150px"></img>
                    <img src={featureTwo} height="450px"></img>
                    <img src={featureFour} height="450px"></img>
                    <img src={featureThree} height="450px;"></img>
                </div>
            </div>
       
            <section id="section-four">
                <div id="contact-section">
                    <p id="adventure">ARE YOU READY FOR YOUR NEXT ADVENTURE?</p>
            
                    <button id="contactbtn"><Link to="/contact" element={<Contact />} className="page-links">CONTACT ME</Link></button>
                  
                </div>
                    <img src={contactImg} height="700px"></img>
            </section>
        </main>
    )
}