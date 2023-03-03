import React from "react";
import { GiFlowerPot } from "react-icons/gi"
import { BsSuitHeart } from "react-icons/bs"
import captureImg from "../assets/captureImg.jpeg"
import beach from "../assets/beach.jpg"
import Slideshow from "../components/Slideshow";



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
                <img src={beach} height="915px"></img>
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
        </section>
    )
}