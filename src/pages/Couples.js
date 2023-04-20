import React from "react";
import couples from "../assets/couples.jpg"

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
        </section>
    )
}