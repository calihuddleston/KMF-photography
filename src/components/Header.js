import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>

        <h1>Kenzie Marie Photography</h1>

        <ul>
          <div className="dropdown">
            <li>
              <button className="dropbtn">
                PORTFOLIO <MdKeyboardArrowDown />
              </button>
              <div className="dropdown-content">
                <a>COUPLES</a>
                <a>WEDDINGS</a>
                <a>PORTRAITS</a>
              </div>
            </li>
          </div>
          <div className="dropdown">
            <li>
              <button className="dropbtn">
                INFO <MdKeyboardArrowDown />
              </button>
              <div className="dropdown-content">
                <a>TESTIMONIALS</a>
                <a>WEDDINGS</a>
                <a>EXPERIENCE</a>
              </div>
            </li>
          </div>

          <li>
            <a>BOOK</a>
          </li>
        </ul>
      </nav>

      <header></header>
      <div>
        <p className="quote">"A GOOD SNAPSHOT KEEPS</p>
        <p className="quote">A MOMENT FROM RUNNING AWAY"</p>
        <div id="box">
          <div id="border-bottom"></div>
        </div>
        <p className="quote title">Family, Portrait, & Wedding Photography</p>
      </div>
    </section>
  );
}
