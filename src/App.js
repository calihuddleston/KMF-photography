import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Feets from "./components/Footer"
import Book from "./pages/Booking";
import Couples from "./pages/Couples";
import Weddings from "./pages/Weddings";
import WedInvest from "./pages/Wedinvest";
import Investment from "./pages/Investment";
import Testimonials from "./pages/Testimonials";
import Portrait from "./pages/Portraits";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
      {/* <Timedown date="2023-06-01T00:00:00" /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/couples" element={<Couples />}></Route>
        <Route path="/weddings" element={<Weddings />}></Route>
        <Route path="/portraits" element={<Portrait />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/wedding-investment" element={<WedInvest />}></Route>
        <Route path="/investment" element={<Investment />}></Route>
        <Route path="/booking" element={<Book />}></Route>
      </Routes>
      <Feets /> 
    </div>
    </Router>
  );
}

export default App;
