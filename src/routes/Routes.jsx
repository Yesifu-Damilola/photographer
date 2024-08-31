import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Gallery from "../pages/gallery/Gallery";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import { Footer } from "../components/footer/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
