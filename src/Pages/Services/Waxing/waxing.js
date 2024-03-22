import React from 'react';
import Header from '../../../Components/Header/header';
import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/footer2';
import { FaArrowRight } from 'react-icons/fa6';
import './waxing.css';

const Waxing = () => {
    return (
        <div className='facials-section'>
            <div className="bg-image-se">
                <Header/>

                <div className="container">
                    <div className="facisl-title">Service Details</div>
                    <div className="cation-navigation"><Link to={"/"}><span id='home-nav'>Home</span></Link> <span className='facials-caption'>Waxing</span></div>
                </div>
            </div>
           

        <div className="container">
            <div className="facials-best-services d-flex justify-content-center pt-5 align-items-top">
                <div className="left">
                    <div className="facial-services-list">
                        <ul>
                            <li className='service-1'><Link to={"/services/facials"} className='d-flex justify-content-between fs-6 fw-semibold'><div className='services-sec-name'>Facials</div><div className='arrow-icon'><FaArrowRight/></div></Link></li>
                            <li className='service-1'><Link className='d-flex justify-content-between fs-6 fw-semibold' to={"/services/bodyTreatment"}><div className='services-sec-name'>Body Treatment</div><div className='arrow-icon'><FaArrowRight/></div></Link></li>
                            <li className='service-1'><Link className='d-flex justify-content-between fs-6 fw-semibold' to={"/services/mineralBath"}><div className='services-sec-name'>Mineral Batth</div><div className='arrow-icon'><FaArrowRight/></div></Link></li>
                            <li className='service-1 activeted'><Link className='d-flex justify-content-between fs-6 fw-semibold' to={"/services/waxing"}><div className='services-sec-name'>Waxing</div><div className='arrow-icon active-arrow-icon'><FaArrowRight/></div></Link></li>
                            <li className='service-1'><Link className='d-flex justify-content-between fs-6 fw-semibold' to={"/services/massage"}><div className='services-sec-name'>Massage</div><div className='arrow-icon'><FaArrowRight/></div></Link></li>
                            <li className='service-1'><Link className='d-flex justify-content-between fs-6 fw-semibold' to={"/services/geothermalSpa"}><div className='services-sec-name'>Geothermal Spa</div><div className='arrow-icon'><FaArrowRight/></div></Link></li>
                        </ul>
                    </div>
                    <div className="need-help p-5 d-flex justify-content-center align-items-center align-content-center text-center">
                        <div className="need-help-sub-sec">
                            <div className="need-title fs-3 fw-semibold">If You Need Any Help Contact With Us</div>
                            <div className="phone-num text-fallspa-p fs-4 fw-semibold">+91 7052101786</div>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="facial-service-details">
                        <div className="facial-service-title">We give the best Service</div>
                        <p className='pt-3'>Pleasure and praising pain was born and I will give you a complete account of the systems, and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally Nor who loves or pursues or desires to obtain pain of itself.</p>

                        <div className="images-section d-flex justify-content-between pt-3">
                            <img src="https://mediacity.co.in/fallspa/assets/img/blog/inner_b1.jpg" alt="" />
                            <img src="https://mediacity.co.in/fallspa/assets/img/blog/inner_b2.jpg" alt="" />
                        </div>
                        <div className="choose-service fs-3 fw-semibold pt-5">Why Choose This Service</div>
                        <p className='pt-3'>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely.</p>
                        <p className='pt-3'>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                        <div className="work-progress fs-3 fw-semibold pt-4">Working Process</div>
                        <p className='pt-3'>Quam parturient mi amet curae augue varius laoreet vehicula non sem aliquet lectus justo litora fames estab phasellus risus ad sollicitudin magna Viverra diam pretium cursus curabitur parturient convallis hymenaeos suspendisse nibh facilisi purus penatibus habitasse mus orcine muscle adipiscing sapien aliquam nulla. Erat parturient auctor facilisis. Nisi cum fringilla hymenaeos ridiculus habitasses augue nullam fringilla. Taciti convallis. Vitae sapien nisi enim vis metus cras fusce lectus sed luctus quis Clas nisl blandit parturient molestie praesent nec</p>
                        <img className='pt-3' src="https://mediacity.co.in/fallspa/assets/img/blog/b_details01.jpg" alt="" />
                        <p className='pt-4 last-para'>Phasellus hac phasellus consequat malesuada veler aliquam dictumst amet a phasellus lacinia integer curabitur duis. Urna taciti nisl torquent varius libero dui. Tempus magnis libero pulvinar purus pharetra justo sem curae duis eget tempus erat ornare. Consequat litora a blandit fermentum. Quam taciti site nascetur nunc litora quis tempor metus adipiscing ac quis sodales ultrices cubilia. Arcu in penatibus vestibulum diam. Curabitur platea quam fusce molestie venenatis platea ligula in aenean gravida dolor aptent nostra luctus rutrum morbi porttitor cursus</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Waxing;