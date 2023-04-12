import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Feets from "./components/Footer"
import Book from "./pages/Booking";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/booking" element={<Book />}></Route>
      </Routes>
      <Feets />
    </div>
    </Router>
  );
}

export default App;
