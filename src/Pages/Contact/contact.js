import React from 'react';
import Header from '../../Components/Header/header';
import Form from '../../Components/Form/form';
import Footer from '../../Components/Footer/footer2';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
             <div className="bg-image-se">
                <Header/>
                <div className="container">
                    <div className="facisl-title">Contact Us</div>
                    <div className="cation-navigation"><Link to={"/"}><span id='home-nav'>Home</span></Link> <span className='facials-caption'>Contact Us</span></div>
                </div>
            </div>
            <Form/>
            <Footer/>
        </div>
    );
};

export default Contact;