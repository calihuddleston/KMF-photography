import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About"
import Book from "../pages/Booking";
import logo from "../assets/logo.png"
import Couples from "../pages/Couples";
import Weddings from "../pages/Weddings";

export default function Navbar() {
  return (
    <div id="navbar">
      <nav>
        {/* <ul>
          <li>
            <Link to="/" element={<Home />} className="page-links">HOME</Link>
          </li>
          <li>
            <Link to="/about" element={<About />} className="page-links">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact" element={<Contact />} className="page-links">CONTACT</Link>
          </li>
        </ul> */}

        <img src={logo} height="150px"></img>

        {/* <ul>
          <div className="dropdowns">
            <li>
              <button className="dropbtn">
                PORTFOLIO <MdKeyboardArrowDown />
              </button>
              <div className="dropdowns-content">
                <Link to="/couples" element={<Couples />}>COUPLES</Link>
                <Link to="/weddings" element={<Weddings />}>WEDDINGS</Link>
                <a>PORTRAITS</a>
              </div>
            </li>
          </div>
          <div className="dropdowns">
            <li>
              <button className="dropbtn">
                INFO <MdKeyboardArrowDown />
              </button>
              <div className="dropdowns-content">
                <a>TESTIMONIALS</a>
                <a>WEDDINGS</a>
                <a>INVESTMENT</a>
              </div>
            </li>
          </div>
          <li>
            <Link to="/booking" element={<Book />} className="page-links">BOOK</Link>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}
