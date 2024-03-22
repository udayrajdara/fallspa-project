import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import fallspaWhite from '../images/fallspa.png';
import { FaFacebookF, FaInstagram, FaLocationArrow, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='footer'>
            <section className="container pt">
                <div className="row justify-content-between">
                    <div className="col-5 p-3">
                        <div className="footer-widget">
                            <div className="f-widget-title">
                                <Link to={"/"} className="navbar-brand">
                                <img 
                                    src={fallspaWhite} 
                                    alt="" />
                                </Link>
                            </div>
                            <div className="footer-link">
                                <p>Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.Quisque vitae metus.</p>
                                <div className="f-contact">
                                    <ul>
                                        <li>
                                            <div className="contact-box">
                                                <div className="icon">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAEJUlEQVRYhb2YeYhWVRjGf/PN5DLNjFviZJFMQ67hkhJlIEY0kOIEomJpIiRm6B8uZYFLmPVHKYr/lBYNBS44bii4ZiYo5oYmLuG+ICmaWTqmpeMX7/Cc4XT7znfvNyM+cLnnvufc9z7nnPe85zk3L/36N+SA9sArwAtAd6AT0FavXwNOAIeB3cA24HxS10mJvAS8A7yVC2tgBbAI+CGuYUFMfTtgLjDSs20GfgQOAafV6/tAB6AM6AG8DAwEhupaCbwPnAt9KNuIVAJLgCI9z1HvTsf1TngSGAu8BzQHajWiyzI1TgWcTALWisQa4AlgaoCExcI+ID9ivwjMFKGlql8qWyIiE4F5Kn8IDAZ+DRDO1zT0AR4NtPkdGAGM1/MsYHockQpgvspvA58FnGdCXkz9F8AQlWcDw0JEioF1Kn8AVMn2JvBUwLkF6UngMnAr0KZUPtoAqxQ3huWq+x+Rb4GmwCbgc9mGK2AzziuQBjoCjwP3Am0myMc4PX8NVKtcH7hu1diS+1k9bAHUqN5GYoxGan/gQ3Ho6nXouNo2Aa4DhUA/YIcbEdfjBR4JwwXVZSOxXfXRVeNwTD6Oe7Z/gE9Vnu1GxObuNxnbeuUkyPemxEbyRg7vNlOnzUdZShkQ5YNcSDj8rXs6x/fuKEcZKo1IXz2sbwCJxmKT3u+bUqCiveNh46C+1zOlqDac9UjkZwm+KFy7mwnb+n5P6V5uREr04LTDNiWnW9IXxTHO3Q7+WJY2jwAHPL+7Zb+hYC/wE5rlEBT9TXW1iiFhO+pOlbfHkG7p+W3h2euCPBVJXobeGqUSLee4IR8E/AJ0A/YGyNwFnvb8dpG9SKNVm5ITJGocbiacc8MfwPPy01lkCgNto37LdT+T8laLadCGokZkjnlkihL46qX7ISOySw8DGs6jDjXSJUc1Tfu8hRBChey7LMXbVnxJBguoPxtJqLnygyn8K1JodzO0KxB5C95nUtISG1Q5tZEkDLeB57TJpQMkkDwwEnssn7jlO0v3KdqiHUqlX7vlSOYvxUqpFsEkqXwHU3MfqVwnGx0RC66NYuir7Erp18k5EvExRj78I0mVwuAnYCuRc80o4KrEsqmphZJ2BVkOSHnSIsXKDbUZ2nwlRe9kqImk0Sq/Ue8ocq4ZrI8jobuK7PD1SJJAfxXYorKNVP3Hoyp+tTd3Kz2d+SAwwiMx1yeRiYjhY2CGyl8C3wGtA0TuK+qPRiSmj0KdEBfLNkfHz/8gdNL7xDtwj9LOPC3DDpvWn4FnM8RHiVbhOe8IMS6UIuL+BpTrwDXIs1XrEH5QeuKa7K21sfUE+uvw7VLBFp2BD4c+lPS3xGvAuxFCDpawbGT8/OPwvabXadMg4n5LOFiOscvStkX+i9okLVm5M69lVJsG67XtX7bkjyTyDvwLvRTsrBSsOUcAAAAASUVORK5CYII=" alt="logo"/>
                                                </div>
                                                <div className="text">
                                                <strong className='text-white'>Monday - Saturday:</strong>
                                                <p>9:00am - 10:00pm</p>
                                                <strong className='text-white'>Monday - Saturday:</strong>
                                                <p>9:00am - 10:00pm</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 p-3 text-white widget-title">
                        <div className="footer-widget">
                            <div className="f-widget-title">
                                <h2>Other Links</h2>
                            </div>
                            <div className="footer-link">
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/aboutUs"}>About Us</Link></li>
                                    <li><Link to={"/services"}>Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 p-3 text-white">
                    <div className="footer-widget">
                            <div className="f-widget-title">
                                <h2>Our Services</h2>
                            </div>
                            <div className="footer-link">
                                <ul>
                                    <li><Link to={"/services/facials"}>Facials</Link></li>
                                    <li><Link to={"/services/bodyTreatment"}>Body Treatment</Link></li>
                                    <li><Link to={"/services/mineralBath"}>Mineral Bath</Link></li>
                                    <li><Link to={"/services/waxing"}>Waxing</Link></li>
                                    <li><Link to={"/services/massage"}>Massage</Link></li>
                                    <li><Link to={"/services/geothermalSpa"}>Geothermal Spa</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col p-3 text-white">
                        <div className="footer-widget">
                            <div className="f-widget-title">
                                <h2>Subscribe Now !</h2>
                            </div>
                            <div className="footer-link">
                                <div className="subscribe">
                                    <form action="" className='contact-form'>
                                        <input type="email" placeholder='You Email...' name="email" id="email" className='header-input' />
                                        <button className='btn header-btn'><FaLocationArrow/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer-social">
                        <Link to={"https://www.facebook.com/"} title="Facebook"><FaFacebookF/></Link>
                        <Link to={"https://www.instagram.com/"} title="Instagram"><FaInstagram/></Link>
                        <Link to={"https://twitter.com"} title="Twitter"><FaXTwitter/></Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center copyright-wrap">
                    <div className="col">
                    <div className="copy-text">Copyright © 2022 <Link to={"/fallspa"}>Fallspa</Link>. All rights reserved.</div>
                    </div>
                    <div className="col">
                        <div className="copy-contact">
                            <ul>
                                <li>
                                    <div className="c-contact">
                                        <div className="icon">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAhCAYAAABAxlKmAAAD3UlEQVRYhcWYeYxOVxjGfzOMqZ3Yi2CsUQkiUZpo7bFWSRhEY5IhorZERBqqjbWWPwQhCImlZWjQtEgwlpGgTYSIKUJQElprbENLdeSdPDc5c/P5vjuf717PP+fc955z7nPPec/zvuekFQ/ZiDAK6A5UIRq8AE4Cm4HXQb5oZDOBI8AnEZH040+gh8q4KA8scYjeBcYChcCHIZGzb9QHfgCaA02BnUDnRB1tZv8F7gBngCHAWeBT4FlIZA0HgL7AfqAh0B5oAPwdr1M6UAEoAr4AZgEdgadAdggkewEvRXQ1MBC4rnc1E3VOV1lH5ffACNXzgAUpJDoFyAcygEnAZNmbqPwvKFm34U/y4SfAbGBLCoguA1aqbq62xnn3Kugg6W+xnwKygN+AL+XHDZMgWUn+OQO4CrQCfklinLhkDQ+Artq1HYAbQJ8yjN0MuCL/zBfRK8kSTUTWg83sHKAccFC+lwhDgWuSv1X6yf/fhWhQsmijDZJ/me9tiNN2IbBb9fHA1Hcl6SEoWcM+oIV8Lxc4BlT0tcmT/P0D9EzwUx68zZ1Q18tC1nATaAP8DHwGXAY6AW0VVLK1OS0qHQ04ZqbKaqkmi2bCfHI+0Ag4DfyhYLJRsncnwRijpQpF+lnDJf3wHEf3S8HCbbEGr58E8eHABAn91gDLbj+yDmjn2E7LbVr7SE4HlqeSbFkw0QkGJodr5TKuSjRTBF2s51+Bz72XybhBMsh2iPaWHJ6IIWfXlQXWAI4Dg5XsREa2tlQC+efhAH0eawP/DvQHviIist5RJFcbyIXN8I/ALuDrGJlXD50iLEOrGrbP1gLuK+Gu53uXr5TRhc1oAbAD2Ca7qc43lqV5M1scAlHkc4YVPvt2ET2g5bbc4zugujZUrtN2rcox5UMm+7HKAsdm2dxI6Wo/x35O4XwR8NCx35Ied0kX0dohkfWi033H5p211sdo79kyfXbL+EoOjAsUNQokLybQaSkgapPQUvUMx/5IZVaMPnVV+vOEEonz7g32SyLCwiAlQij5ea665RQXnW8ec3KO1rKVU/sMz2cH6MBojv5B0EuHOEjTbNjpIkdh2SP7QrZNwAUt/UP5cVP5bSvJ3CHlEXaone3eyIQFW9LKuukpcr6Ro9y4qmMz1VgKzAXGOXZrNy0KspN1WtgDDIvxvrNc46L02EML3SVckyIQBVnDeWVapqXzkh0kqkSmG3BPy7s9QLS0y4/GfmNUZB9p8xZqI/0l17AI95F2vqnATC37XtVLISo3cGEkTNfjXa1alvat/+j+PsiWfFd5bRfdJFrEuq3LFLt+tXppAG8AikvkaiCmWIgAAAAASUVORK5CYII=" alt="img" />
                                        </div>
                                        <div className="text">
                                        <span>info@wellspa.com</span>
                                        <h3> Our Email:</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="c-contact">
                                        <div className="icon">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAD5ElEQVRYhbWYe2iXVRjHP04WKlNSEERYExUTb6RzNpZRzKlZeEFyyVIUNXFSRqFO07yhy1l09YJiSRqNplLiLKaWWmnNS6RWlGvgLRR0SqB5xckj3xNvx/f9/d7f+PX955yd87zP73vOec73ec6aNY78kDSgApgJfAPUAF8Bv8b1mxExnglkp0CuQb6KgDeBX4A9wKimkigFLgGngVogL4afFcADwONAOXAWeBL4HPgC6JwKiXeB1UCWSAwADgKDYxC5BXwPzNMuFutIRgL1wLg4JJYBL6tvq88B5ujvnVpZKtgM9FK8GDYBcxOReAN4DbgO9AUOa7wiQMzOeFACElHxZQt5Wv1y/c59H+YHVvwo8LNn8z5Qpv5uYGDIDxnpq1rtMyHzdlsK1LcdH+uTWKT+BOBYxGos8F5R/zugkzd/Emihc68GjgBPeDY/AIXqVwIdgiSGAHeAjREEHCxoF6hf5s09CzwIPKdd6QfsBV7y7OxIl6pfFSTRDLidhIBDjdqOIXN/y7EF9TSN2VFO9+xeB07oOj/lSNjHdsdbJiHQFvhM/U+T2K4NBPEqXfUgHLG3HIl9GshP4NRWflSx8EmATCKYhE/S/GbP7msJWk/g4QwNGIZHOMxRoGXL2fgYBBw2KNgfAoZ5c+vUjsmQrBomRjharkj+WCqYKubL/kXvu61qR2RIno/ozMPk2QnXjSYQMGxXa4LVOjD+m9o8p3JOKyq4H+8ooU2NmUPCYLfm95DxWcDKYD1RB3RVbFR7xraKHcA/QHu1aUNQ7yer/SjE+ZfAeqCVFDOtCJL4VorWPuJYXlBa7ydS/8tOGEqARmC2FM1HoY7Nrtu2JL5HS6gWRyjsvwirMYslRpbW2wHXvPksZdouwCFgKHDZs1kfOF7kIz8qQYbVAFVSRcuKu0LmrwC5wH7liXqvltwoAheA54H3lBIOR5WKiaptW2V/YIupWoTNmkCysoBurpLgvKqqBs0tVdln6AMcT7YTDlbOnVOaXhthU6r0fUZ5wgj8JfINAbv5LllpR3Ljkriq7bssoaqMsKtSfjHh+QDoLSI+bH6JqvJafXMPcR4/Zvyj8keNduZKso8S4G1VaQeAx5LthMMpre4n3YS6iDozLl7VURXo9sUiYbioc3S1oanmwiaS6AG0AW46+Y9LwqFEyomSXl3cp57QXRpjz8wp0qKUSSAh6i7p7qqn3i5XLyZAN8l+pgJ4kzNtCgnDH3pfjNJTr0hviz9VkedJMxyGSS1b6/kwI+gsXf8asPeGlfd+QWv6YT9szwGD6Y0Tt7STcHhEO2SVtu2G5RmDZWg7AlPf/wK4C+LP1b2IWpu4AAAAAElFTkSuQmCC" alt="img" />
                                        </div>
                                        <div className="text">
                                            <span>+91 598 9874 987</span>
                                            <h3>Call Now:</h3>
                                            </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;