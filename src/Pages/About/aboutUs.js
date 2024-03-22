import React, { useState } from 'react';
import Header from '../../Components/Header/header';
import { Link } from 'react-router-dom';
import './aboutUs.css';
import Form from '../../Components/Form/form';
import Footer from '../../Components/Footer/footer2';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa6';

const AboutUs = () => {


    const faqData = [
        {
            id: 1,
            faq : 'Vivamus rhoncus ante a ipsum imperdiet ?',
            caption : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip'
        },
        {
            id: 2,
            faq : 'Vivamus rhoncus ante a ipsum imperdiet ?',
            caption : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip'
        },
        {
            id: 3,
            faq : 'Vivamus rhoncus ante a ipsum imperdiet ?',
            caption : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip'
        },
        {
            id: 4,
            faq : 'Vivamus rhoncus ante a ipsum imperdiet ?',
            caption : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip'
        },
    ]

    const[faqDrop, setFaqDrop] = useState(null)

    // const toggle = (i)=>{
    //     if(faqDrop === i){
    //         return setFaqDrop(null)
    //     }


    //     setFaqDrop(i)
    // }

    const toggle = (i)=>{
        if(faqDrop === i){
           return setFaqDrop(null)
        }
        
        setFaqDrop(i)
    }

    return (
        <div>
           <div className="bg-image-se">
                <Header/>

                <div className="container">
                    <div className="about-title">About Us</div>
                    <div className="about-navigation"><Link to={"/"}><span id='home-nav'>Home</span></Link> <span className='about-caption'>About Us</span></div>
                </div>
            </div>

            <section className='about-skin-section'>
            <div className="cards mb-3 img4">
            <div className="row g-0">
                <div className="col-md-6 img-4">

                </div>
                <div className="col-md-5">
                <div className="card-body">
                    <p className="card-text about-skin-about text-fallspa-p fw-semibold">ABOUT US</p>
                    <p className="card-text about-skin-title fw-semibold">Best Way To about Your Skin</p>
                    <h5 className="card-title about-skin-caption">Suspendisse et porttitor leo. Sed porttitor dui sit amet luctus bibendum. Sed pulvinar diam lacus, ut elementum nisl volutpat in. Nullam vitae nulla dolor. Pellentesque viverra arcu ut Curabitur tempor mauris ex, eget porta tellus posuere maximus. <br /><br /></h5>
                    <button className="card-btn bg-fallspa-v ">EXPLORE MORE</button>
                </div>
                </div>
            </div>
            </div>
            </section>
            <Form/>

            <section className="faq">
                <div className="">
                <div className="faq-height d-flex justify-content-center align-items-center align-content-center">
                    <div className="faq-left">
                        {/* <img src="" alt="faq-img" /> */}
                    </div>
                    <div className="faq-right d-flex justify-content-center">
                        <div className="faq-center">
                        <div className="faq-caption">FAQ</div>
                        <div className="faq-title">Frequently Asked Questions</div>
                        <div className="faq-maping">
                            {faqData.map((faq, i)=>{
                                return <div className="faq-dropdown" key={faq.id}>
                                        <div className="faq-btn-sec" onClick={()=> toggle(i)}>
                                            <div className={`${faqDrop === i ? 'faq-btn-faq' : 'faq-btn-faq-hover'}   d-flex justify-content-between align-items-center`}>
                                                <div className='faq-btn'>{faq.faq}</div>
                                                <div className={faqDrop === i ? 'faq-icon' : 'faq-icon-b'}>{faqDrop === i ? <FaChevronDown/> : <FaChevronLeft/>}</div>
                                            </div>
                                            
                                            <div className={faqDrop === i ? 'faq-content' : 'faq-content-hide'}>{faq.caption}</div>
                                            
                                        </div>
                                        </div>
                            })}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default AboutUs;