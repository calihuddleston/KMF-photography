import React from "react";
import { Link } from "react-router-dom";
import {about, realtalk} from "../assets"
import Book from "./Booking";

export default function About () {
    return (
        <section>
            <div id="about-section-one">
                <div>
                    <img src={about} height="650px"></img>
                </div>
                <div id="story">
                    <p>BEFORE YOU SHARE YOUR STORY...</p>
                    <h2 id="mine">LET ME TELL YOU <span>Mine</span></h2>
                    <div id="story-paragraph">
                        <p>Hello, my name is Mackenzie, but my friends call me Kenzie. I live in West Michigan. I'm a self taught photographer & I've been behind the camera since 2018.</p>
                        <p>In the last 4 years I've created lots of art from weddings, to portraits, to furry friends and much more! I love watching families grow, couples become first time parents, and helping people thrive. My favorite part about it all, is helping you capture those moments you may forget.</p>
                        <p>Let me help tell your story.</p>
                    </div>
                </div>
            </div>
            <div id="about-section-two">
                <div id="realtalk">
                    <h4><span id="realtalk-title">Real Talk</span></h4>
                    <ul id="about-list">
                        <li>++ Cold mornings with a cozy blanket, a good smelling candle, and a good movie on is the best way to spend a morning I'm not working. #loveit</li>
                        <li>++ Band-tees are my favorite!!</li>
                        <ul>
                            <li>-Fun fact: I went to 7 different concerts and seen 20 different bands in the year 2022</li>
                        </ul>
                        <li>++ You ain't ROCKIN' if you ain't CROCIN' #Crocs4Lyfe</li>
                        <li>++ Outside summer concerts are the best #It'sAVibe</li>
                        <li>++ 90% of my closet contains hoodies and black clothes. #INeedAClosetMakeover</li>
                        <li>++ I make really bad jokes, and I laugh at my own jokes</li>
                        <li>++ I have a 4 year old son who loves monster trucks and nerf guns</li>
                        <li>++ Tacos are LIFE!!!</li>
                        <li>++ Leg day is the best day #GetThoseGains</li>
                    </ul>
                </div>
                <div>
                    <img src={realtalk} height="900px"></img>
                </div>
            </div>
            <div id="about-section-three">
                <h2 id="section-three-paragraph">I'm quite down to earth and super easy to get along with. I'm a bit awkward at first but then when I get comfortable and get to know you I"m super outgoing. I love random chats about life and creating art. When we meet, I can promise you 2 things - laughs until your stomach hurts as well as beautiful photo memories that we'll create together.</h2>
            </div>
            <div id="about-section-four">
                <div id="schedule-with-me">
                    <h2 id="schedule-text">ARE YOU READY TO SCHEDULE? LET'S DO IT!</h2>
                </div>
                <div id="about-schedule-description">
                    <h4 id="about-schedule-paragraph">In the past 4 years I've worked with hundreds of couples, families, and seniors. Assisted them with planning, picking the location, and chooding outfits. Let me help you plan your dream photoshoot and make memories that will last a lifetime.</h4>
                    <button id="schedule-button"><Link to="/booking" element={<Book />} className="page-links">BOOK WITH ME</Link></button>
                </div>
            </div>
        </section>
    )
}