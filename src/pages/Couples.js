import React from "react";
import { Link } from "react-router-dom";
import couples from "../assets/couples.jpg";
import CouplesCarousel from "../components/CoupleSlideshow";

export default function Couples () {
    return (
        <section>
            <div id="couples-section-one">
                <div>
                    <img src={couples} height="600px"></img>
                </div>
                <div id="couples-text">
                    <h2 id="couples-title">Couples</h2>
                    <p>You don't need a big, special occasion to celebrate each other and document your relationship. Pick a location and let's start planning a marvelous photoshoot.</p>
                </div>
            </div>
            <div id="couples-carousel">
                <CouplesCarousel />
            </div>
            <div id="wedding-footer">
                <div>
                    <Link className="page-links"><span>About Me</span> <br/> GET TO KNOW ME</Link>
                </div>
                <div id="wedding-break"></div>
                <div>
                    <Link className="page-links"><span>Contact Me</span> <br/> GET IN TOUCH</Link>
                </div>
            </div>
        </section>
    )
}