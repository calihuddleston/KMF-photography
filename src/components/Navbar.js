import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About"
import Book from "../pages/Booking";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" element={<Home />} className="page-links">HOME</Link>
          </li>
          <li>
            <Link to="/about" element={<About />} className="page-links">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact" element={<Contact />} className="page-links">CONTACT</Link>
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
            <Link to="/booking" element={<Book />} className="page-links">BOOK</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
