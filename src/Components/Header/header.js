import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import fallspaBlack from '../images/fallspa-b.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
          <img 
            src={fallspaBlack}
            alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav fs-6">
              <li className="nav-item lines">
                <Link to={"/"} className="nav-link active pe-5" aria-current="page">Home <span className='plus-icon'><FaPlus /></span></Link>
              </li>
              <li className="nav-item lines">
                <Link to={"/aboutUs"} className="nav-link pe-5">About US <span className='plus-icon'><FaPlus /></span></Link>
              </li>
              <li className="nav-item dropdown lines">
                <Link to={"/services"} className="nav-link trans pe-5 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services <span className='plus-icon'><FaPlus /></span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item line"><Link to={"/services/facials"}>Facials</Link></li>
                  <li className="dropdown-item line"><Link to={"/services/bodyTreatment"}>Body Treatments</Link></li>
                  <li className="dropdown-item line"><Link to={"/services/mineralBath"}>Mineral Baths</Link></li>
                  <li className="dropdown-item line"><Link to={"/services/waxing"}>Waxing</Link></li>
                  <li className="dropdown-item line"><Link to={"/services/massage"}>Massage</Link></li>
                  <li className="dropdown-item line"><Link to={"/services/geothermalSpa"}>Geothermal Spa</Link></li>
                  <li className="dropdown-item"><Link to={"/services"}>Services</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/contactUs"} className="nav-link">Contact <span className='plus-icon'><FaPlus /></span></Link>
              </li>
              <li>
                <button className='btn btn-none'>Book Appointment</button>
              </li>
            </ul>
          </div>
    </div>

      </nav> 
        </div>
    );
};

export default Header;