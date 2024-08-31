import { BsCamera } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="nav-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <BsCamera className="icamera" />
          <Link to="/" className="logo" style={{ color: "#fff" }}>
            PhotoFolio
          </Link>
        </div>
        <div className="toggle" onClick={handleToggle}>
          ☰
        </div>
        <div className={`navbar-links ${isActive ? "active" : ""}`}>
          <Link
            to="/"
            className={`home `}
            style={{
              color: pathname === "/" ? "#fff" : "",
            }}
          >
            HOME
          </Link>
          <Link
            to="/about"
            style={{
              color: pathname === "/about" ? "#fff" : "",
            }}
          >
            ABOUT
          </Link>
          <div className="dropdown">
            <Link
              to="/gallery"
              className="dropdown-link"
              onClick={handleDropdownToggle}
              style={{
                color: pathname === "/gallery" ? "#fff" : "",
              }}
            >
              GALLERY
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </Link>
            <div
              className={`dropdown-content ${isDropdownOpen ? "active" : ""}`}
            >
              <Link to="/NATURE">NATURE</Link>
              <Link to="/PEOPLE">PEOPLE</Link>
              <Link to="/ARCHITECTURE">ARCHITECTURE</Link>
              <Link to="/ANIMALS">ANIMALS</Link>
              <Link to="/SPORTS">SPORTS</Link>
              <Link to="/TRAVEL">TRAVEL</Link>
              <Link to="/SUB MENU">SUB MENU</Link>
            </div>
          </div>
          <Link
            to="/services"
            style={{
              color: pathname === "/services" ? "#fff" : "",
            }}
          >
            SERVICES
          </Link>
          <Link
            to="/contact"
            style={{
              color: pathname === "/contact" ? "#fff" : "",
            }}
          >
            CONTACT
          </Link>
        </div>
        <div className="icons">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </nav>
    </header>
  );
};
