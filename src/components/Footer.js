import React, { useRef } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs"


function Feets () {
    let topScroll = useRef(null);

    window.onscroll = function() {scrollFunction ();}

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topScroll.current.style.display = 'block';
        } else {
            topScroll.current.style.display = 'none';
        }
    }

    function topFunction () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="feets">
            <div>
                <a href="https://www.facebook.com/KenzieMariePhotographyLLC" target="_blank" rel="noreferrer"><FaFacebook  className="social-links"/></a>
                <a href="https://www.instagram.com/kenziemariephotographyllc/" target="_blank" rel="noreferrer"><FaInstagram  className="social-links"/></a>
                <a href="https://www.tiktok.com/@kenziemariephotography?_t=8awZXc4mshe&_r=1&fbclid=IwAR21u_thj9sKdQRuOEEPimLPYsU5muClzhwmAwj2G4TGnYFcYTiBVapWOO0" target="_blank" rel="noreferrer"><FaTiktok  className="social-links"/></a>
            </div>
            <div id="designed-by">
                <p>© 2018 Kenzie Marie Photography LLC</p>
                <p>Designed & Developed by <a href="https://www.facebook.com/dreamsite.dev/" target="_blank" rel="noreferrer" id="dreamsite">DreamSite Dev</a></p>
            </div>
            <div>
                <button id="myBtn" onClick={topFunction} ref={topScroll} ><BsArrowUp /></button>
            </div>
        </footer>
    );
}

export default Feets 