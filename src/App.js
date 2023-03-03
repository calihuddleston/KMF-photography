import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
