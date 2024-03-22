import React from 'react';
import { FaPlus } from "react-icons/fa6";
import './navbar.css';


const Navbar =()=>{

    return (
        <div className='conatiner'>
           <div className="child-container">
                <nav>
                    <div className='nav-top'>

                    </div>
                    

                    <div className='nav-list'>
                        <ul id='navbar'>
                            <li><a href="#">Home <span className='plus-icon'><FaPlus /></span></a></li>
                            <li><a href="#">About US <span className='plus-icon'><FaPlus /></span></a></li>
                            <li><a href="#">Services <span className='plus-icon'><FaPlus /></span></a>
                            </li>
                            <li><a href="#">Contact <span className='plus-icon'><FaPlus /></span></a></li>
                            <button>Book Appointment</button>
                        </ul>
                    </div>
                    <div id="mobile" className='menu-icons'>
                            <span className=""></span>
                    </div>
                </nav>
           </div>
        </div>
    );
};
export default Navbar;