import React from "react";
import "./footer2.css";
import { Link } from "react-router-dom";
import fallspaWhite from "../images/fallspa.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaXTwitter,
} from "react-icons/fa6";

const Foooter = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="child-1">
          <div className="web-logo">
            <Link to={"/"}>
              <img src={fallspaWhite} alt="" />
            </Link>
          </div>
          <div className="footer-contect-sec">
            <div className="footer-caption">
              <p>
                Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
                sagittis libero tincidunt tempor finibus. Mauris at dignissim
                ligula, nec tristique orci.Quisque vitae metus.
              </p>

              <div className="footer-content-time">
                <ul>
                  <li>
                    <div className="contact-box d-flex">
                      <div className="icon pe-3">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAEJUlEQVRYhb2YeYhWVRjGf/PN5DLNjFviZJFMQ67hkhJlIEY0kOIEomJpIiRm6B8uZYFLmPVHKYr/lBYNBS44bii4ZiYo5oYmLuG+ICmaWTqmpeMX7/Cc4XT7znfvNyM+cLnnvufc9z7nnPe85zk3L/36N+SA9sArwAtAd6AT0FavXwNOAIeB3cA24HxS10mJvAS8A7yVC2tgBbAI+CGuYUFMfTtgLjDSs20GfgQOAafV6/tAB6AM6AG8DAwEhupaCbwPnAt9KNuIVAJLgCI9z1HvTsf1TngSGAu8BzQHajWiyzI1TgWcTALWisQa4AlgaoCExcI+ID9ivwjMFKGlql8qWyIiE4F5Kn8IDAZ+DRDO1zT0AR4NtPkdGAGM1/MsYHockQpgvspvA58FnGdCXkz9F8AQlWcDw0JEioF1Kn8AVMn2JvBUwLkF6UngMnAr0KZUPtoAqxQ3huWq+x+Rb4GmwCbgc9mGK2AzziuQBjoCjwP3Am0myMc4PX8NVKtcH7hu1diS+1k9bAHUqN5GYoxGan/gQ3Ho6nXouNo2Aa4DhUA/YIcbEdfjBR4JwwXVZSOxXfXRVeNwTD6Oe7Z/gE9Vnu1GxObuNxnbeuUkyPemxEbyRg7vNlOnzUdZShkQ5YNcSDj8rXs6x/fuKEcZKo1IXz2sbwCJxmKT3u+bUqCiveNh46C+1zOlqDac9UjkZwm+KFy7mwnb+n5P6V5uREr04LTDNiWnW9IXxTHO3Q7+WJY2jwAHPL+7Zb+hYC/wE5rlEBT9TXW1iiFhO+pOlbfHkG7p+W3h2euCPBVJXobeGqUSLee4IR8E/AJ0A/YGyNwFnvb8dpG9SKNVm5ITJGocbiacc8MfwPPy01lkCgNto37LdT+T8laLadCGokZkjnlkihL46qX7ISOySw8DGs6jDjXSJUc1Tfu8hRBChey7LMXbVnxJBguoPxtJqLnygyn8K1JodzO0KxB5C95nUtISG1Q5tZEkDLeB57TJpQMkkDwwEnssn7jlO0v3KdqiHUqlX7vlSOYvxUqpFsEkqXwHU3MfqVwnGx0RC66NYuir7Erp18k5EvExRj78I0mVwuAnYCuRc80o4KrEsqmphZJ2BVkOSHnSIsXKDbUZ2nwlRe9kqImk0Sq/Ue8ocq4ZrI8jobuK7PD1SJJAfxXYorKNVP3Hoyp+tTd3Kz2d+SAwwiMx1yeRiYjhY2CGyl8C3wGtA0TuK+qPRiSmj0KdEBfLNkfHz/8gdNL7xDtwj9LOPC3DDpvWn4FnM8RHiVbhOe8IMS6UIuL+BpTrwDXIs1XrEH5QeuKa7K21sfUE+uvw7VLBFp2BD4c+lPS3xGvAuxFCDpawbGT8/OPwvabXadMg4n5LOFiOscvStkX+i9okLVm5M69lVJsG67XtX7bkjyTyDvwLvRTsrBSsOUcAAAAASUVORK5CYII="
                          alt="logo"
                        />
                      </div>
                      <div className="text">
                        <strong className="text-white">
                          Monday - Saturday:
                        </strong>
                        <p>9:00am - 10:00pm</p>
                        <strong className="text-white">
                          Monday - Saturday:
                        </strong>
                        <p>9:00am - 10:00pm</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="child-2">
          <div className="footer-links">Other Links</div>
          <div className="footer-link-ul">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/aboutUs"}>About Us</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="child-3">
          <div className="footer-services">Our Services</div>
          <div className="footer-link-ul">
            <ul>
              <li>
                <Link to={"/services/facials"}>Facials</Link>
              </li>
              <li>
                <Link to={"/services/bodyTreatment"}>Body Treatment</Link>
              </li>
              <li>
                <Link to={"/services/mineralBath"}>Mineral Bath</Link>
              </li>
              <li>
                <Link to={"/services/waxing"}>Waxing</Link>
              </li>
              <li>
                <Link to={"/services/massage"}>Massage</Link>
              </li>
              <li>
                <Link to={"/services/geothermalSpa"}>Geothermal Spa</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="child-4">
          <div className="footertwo-sec">
            <div className="footer-subscribe">Subscribe Now !</div>
            <div className="footer-link-ul">
              <div className="subscribe">
                <form action="" className="contact-form">
                  <input
                    type="email"
                    placeholder="You Email..."
                    name="email"
                    id="email"
                    className="header-input"
                  />
                  <button className="btn header-btn">
                    <FaLocationArrow />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <Link to={"https://www.facebook.com/"} title="Facebook">
              <FaFacebookF />
            </Link>
            <Link to={"https://www.instagram.com/"} title="Instagram">
              <FaInstagram />
            </Link>
            <Link to={"https://twitter.com"} title="Twitter">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foooter;
