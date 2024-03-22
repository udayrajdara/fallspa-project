import React from 'react';
import './home.css'
import Header from '../../Components/Header/header';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/footer2';
import Form from '../../Components/Form/form';

const Home = () => {

    const navigate = useNavigate()
    return (
        <div>
            <section className="banner">
            <Header/>
               <div className="home-banner">
               <div className="caption">SPA & WELNESS SALON</div>
                <div className="title fw-bold">Make Your Skin <br /> Shine & Glowing</div>
                <div className="sub-caption">
                Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique.
                </div>
                <div className="home-btn-section">
                    <button className='home-btn1 mb-2' onClick={()=> navigate("/services")}>DISCOVER MOER</button>
                    <button className='home-btn2 mb-2'>BOOK NOW</button>
                </div>
               </div>
            </section>


            <section className="cards-img d-flex justify-content-between align-items-center">
            <div className="card mb-3 img1">
            <div className="row g-0 ps-3 pe-3">
                <div className="col-md-11">
                <div className="card-body">
                    <p className="card-text home-card-caption text-fallspa-p fw-semibold">OFFER FOR WOMEN</p>
                    <h5 className="card-title home-card-title">Best Care For Women Skin & Body</h5>
                    <button className="card-btn card-btn-1">START NOW</button>
                </div>
                </div>

            </div>
            </div>

            <div className="card mb-3 img2">
            <div className="row g-0 ps-3 pe-3">
                <div className="col-md-12">
                <div className="card-body">
                    <p className="card-text home-card-caption text-fallspa-v fw-semibold">OFFER FOR MAN</p>
                    <h5 className="card-title home-card-title">Get The Best Glow With Our Man Products</h5>
                    <button className="card-btn card-btn-2">START NOW</button>
                </div>
                </div>

            </div>
            </div>

            <div className="card mb-3 img3">
            <div className="row g-0 ps-3 pe-3">
                <div className="col-md-11">
                <div className="card-body">
                    <p className="card-text home-card-caption text-fallspa-o fw-semibold">OFFER FOR COUPLE</p>
                    <h5 className="card-title home-card-title">Get The Best Care For Couples</h5>
                    <button className="card-btn card-btn-3">START NOW</button>
                </div>
                </div>
  
            </div>
            </div>

            </section>

            <section className='care-skin-section'>
            <div className="cards mb-3 img4">
            <div className="row g-0">
                <div className="col-md-6 img-4">

                </div>
                <div className="col-md-5">
                <div className="card-body">
                    <p className="card-text care-skin-about text-fallspa-p fw-semibold">ABOUT US</p>
                    <p className="card-text care-skin-title fw-semibold">Best Way To Care Your Skin</p>
                    <h5 className="card-title care-skin-caption">Suspendisse et porttitor leo. Sed porttitor dui sit amet luctus bibendum. Sed pulvinar diam lacus, ut elementum nisl volutpat in. Nullam vitae nulla dolor. Pellentesque viverra arcu ut Curabitur tempor mauris ex, eget porta tellus posuere maximus. <br /><br /></h5>
                    <button className="card-btn bg-fallspa-v ">EXPLORE MORE</button>
                </div>
                </div>
            </div>
            </div>
            </section>


            <section className="bg-provide">
                <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title center-align mb-50 text-center">
                            <div className='provide-caption'>OUR SERVICES</div>
                            <div className='provide-title'>What We Provide</div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='about-content s-about-content'>
                            <ul className='sr-tw-ul'>
                                <li>
                                    <div className='icon-right'>
                                        <img src="https://mediacity.co.in/fallspa/assets/img/icon/fe-icon01.png" alt="icon01"/>
                                    </div>
                                    <div className="text">
                                        <h4><Link to={"/services/facials"}>Facials</Link></h4>
                                        <p>Cras id aliquam leo. Vestibulum laoreet, mi sit amet tristique tincidunt nec laoreet.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon-right'><img src="https://mediacity.co.in/fallspa/assets/img/icon/fe-icon05.png" alt="icon01"/></div>
                                    <div className="text">
                                        <h4><Link to={"/services/mineralBath"}>Mineral Bath</Link></h4>
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon-right'><img src="https://mediacity.co.in/fallspa/assets/img/icon/fe-icon07.png" alt="icon01"/></div>
                                    <div className="text">
                                        <h4><Link to={"/services/massage"}>Massage</Link></h4>
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
                        <div className="sd-img">
                            <img src="	https://mediacity.co.in/fallspa/static/media/services-img-details2.20e1bc1b939dea2d577b.png" alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='about-content s-about-content'>
                            <ul className='sr-tw-ul sr-thr-ul'>
                                <li>
                                    <div className='icon'><img src="https://mediacity.co.in/fallspa/assets/img/icon/fe-icon04.png" alt="icon01"/></div>
                                    <div className="text pt-10">
                                        <h4><Link to={"/services/bodyTreatment"}>Body Treatment</Link></h4>
                                        <p>Cras id aliquam leo. Vestibulum laoreet, mi sit amet tristique tincidunt nec laoreet.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon'><img src="https://mediacity.co.in/fallspa/assets/img/icon/fe-icon06.png" alt="icon01"/></div>
                                    <div className="text pt-10">
                                        <h4><Link to={"/services/waxing"}>Waxing</Link></h4>
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon'><img src="https://mediacity.co.in/fallspa/assets/img/icon/fe-icon08.png" alt="icon01"/></div>
                                    <div className="text pt-10">
                                        <h4><Link to={"/services/massage"}>Geothermal Spa</Link></h4>
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Form/>
            <Footer/>
        </div>
    );
};

export default Home;