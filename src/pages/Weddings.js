import React from "react";
import { weddingspage, weddingsImgOne, weddingsImgTwo } from "../assets";
import WeddingCarousel from "../components/WeddingSlideshow";
import { Link } from "react-router-dom";

export default function Weddings () {
   

    return (
        <section>
            <div id="weddings-section-one">
                <div id="weddings-text">
                    <h2 id="weddings-title">Weddings</h2>
                    <p>From big vibrant parties, to cozy, candlelit wedding ceremonies. Love is beautiful, and there are so many ways it can be captured, through a hug, a kiss, a stare, a wink. All I ask my clients is to trust me with their memories, and allow themselves to fully enjoy their day.</p>
                </div>
                <div>
                    <img src={weddingspage} height="600px"></img>
                </div>
            </div>
            {/* weddings section 2 */}
            <div id="weddings-section-two">
                <div>
                    <WeddingCarousel />
                </div>
            </div>
            <div id="weddings-section-three">
                <div id="wedding-images">
                    <img src={weddingsImgOne} height="900px"></img>
                    <img src={weddingsImgTwo} height="900px"></img>
                </div>
                <figure id="wedding-quote">
                <blockquote >"For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul."</blockquote>
                <figcaption>- GABRIEL S.</figcaption>
            </figure>
            </div>
            <div>
        
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