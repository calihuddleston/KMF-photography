import React from "react";
import { Link } from "react-router-dom";
import Book from "./Booking";
import { investment1, investment2, investment3, investment4, investment5, investment6 } from "../assets";

export default function Investment () {
    return (
        <section>
            <div id="investment-section-one">
                <h1>Investment</h1>
            </div>
            <div id="investment-section-two">
                <img src={investment1} width="300px"></img>
                <img src={investment2} width="300px"></img>
                <img src={investment3} width="300px"></img>
                <img src={investment4} width="300px"></img>
            </div>
            <div id="investment-section-three">
                <h3>LETS TALK</h3>
                <p>Images hold a lot of memories! they hold laughs, emotions, and even feelings. <br /> As a candid photographer I believe it is my responsibility to make sure your images hold some sort of value. Maybe it's the baby that needs a snuggle to calm down or grandma needs help walking to the beach. Yes everyone standing there looking at the camera all stiff and yelling "CHEESE" is great too but, I believe images are more than that. <br /> I will help guide and prompt you to not look so stiff and get some movements within your images!</p>
            </div>
            <div className="wedinvest-section-image">
                <img src={investment5} width="1020px"></img>
            </div>
            <div id="the-designer">
                <h1>The Designer</h1>
                <ul id="the-designer-list">
                    <li>$350</li>
                    <li>Up To 1 Hour of Photography</li>
                    <li>25 High Quality Professional Edited Images</li>
                    <li>2 Locations</li>
                    <li>1 Outfit Change</li>
                    <li>Online Digital Art with Print Release</li>
                    <li>**$100 non-refundable retainer due before your session to reserve your date and time</li>
                    <li>**$5 per extra image</li>
                </ul>
            </div>
            <div className="wedinvest-section-image">
                <img src={investment6} width="1020px"></img>
            </div>
            <div id="the-graphic">
                <h1>The Graphic</h1>
                <ul id="the-graphic-list">
                    <li>$200</li>
                    <li>Up To 30 Minutes of Photography</li>
                    <li>15 High Quality Professional Edited Images</li>
                    <li>1 Location</li>
                    <li>Online Digital Art with Print Release</li>
                    <li>**$50 non-refundable retainer due before your session to reserve your date and time</li>
                    <li>**$10 per extra image</li>
                </ul>
            </div>
            <div id="wedinvest-section-three">
                <h2>WANT TO SCHEDULE?</h2>
                <h5>CLICK "REQUEST A BOOKING"</h5>
                <button id="bookbtn"><Link to="/booking" element={<Book />} className="page-links">REQUEST A BOOKING</Link></button>
            </div>
        </section>
    )
}