import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import fallspaBlack from "../images/fallspa-b.png";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        sticky ? "sticky-navbar" : ""
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={fallspaBlack} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav fs-6">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <FaPlus className="plus-icon" />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/aboutUs" className="nav-link">
                About Us <FaPlus className="plus-icon" />
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/services"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Services <FaPlus className="plus-icon" />
              </Link>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item line" to="/services/facials">Facials</Link></li>
                <li><Link className="dropdown-item line" to="/services/bodyTreatment">Body Treatments</Link></li>
                <li><Link className="dropdown-item line" to="/services/mineralBath">Mineral Baths</Link></li>
                <li><Link className="dropdown-item line" to="/services/waxing">Waxing</Link></li>
                <li><Link className="dropdown-item line" to="/services/massage">Massage</Link></li>
                <li><Link className="dropdown-item line" to="/services/geothermalSpa">Geothermal Spa</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/contactUs" className="nav-link">
                Contact <FaPlus className="plus-icon" />
              </Link>
            </li>

            <li>
              <button className="btn appointment-btn">
                Book Appointment
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;