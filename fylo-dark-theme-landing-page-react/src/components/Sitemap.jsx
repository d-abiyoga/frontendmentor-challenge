import React from "react";
import Logo from "../assets/img/logo.svg";
import iconLocation from "../assets/img/icon-location.svg";
import iconPhone from "../assets/img/icon-phone.svg";
import iconEmail from "../assets/img/icon-email.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Sitemap = () => {
    return (
        <section className="sitemap-wrapper">
            <img className="sitemap__company-logo" src={Logo} alt="fylo" />
            <ul className="contact-info">
                <li className="contact-info__item" id="location">
                    <div className="contact__item-icon-wrapper">
                        <img
                            className="contact__item-icon"
                            src={iconLocation}
                            alt=""
                        />
                    </div>
                    <p className="contact__detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                </li>
                <li className="contact-info__item" id="phone-number">
                    <div className="contact__item-icon-wrapper">
                        <img
                            className="contact__item-icon"
                            src={iconPhone}
                            alt=""
                        />
                    </div>
                    <p className="contact__detail">+1-543-123-4567</p>
                </li>
                <li className="contact-info__item" id="email-address">
                    <div className="contact__item-icon-wrapper">
                        <img className="contact__icon" src={iconEmail} alt="" />
                    </div>
                    <p className="contact__detail">example@fylo.com</p>
                </li>
            </ul>
            <ul className="links">
                <li className="links__item">
                    <a href="/about-us" className="link">
                        About Us
                    </a>
                </li>
                <li className="links__item">
                    <a href="/jobs" className="link">
                        Jobs
                    </a>
                </li>
                <li className="links__item">
                    <a href="/press" className="link">
                        Press
                    </a>
                </li>
                <li className="links__item">
                    <a href="/blog" className="link">
                        Blog
                    </a>
                </li>
                <li className="links__item">
                    <a href="/contact-us" className="link">
                        Contact Us
                    </a>
                </li>
                <li className="links__item">
                    <a href="/terms" className="link">
                        Terms
                    </a>
                </li>
                <li className="links__item">
                    <a href="/privacy" className="link">
                        Privacy
                    </a>
                </li>
            </ul>
            <div className="social-media-icons">
                <a
                    aria-label="facebook"
                    href="https://facebook.com"
                    className="social-media-icon__link link"
                    rel="noopener"
                >
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        id="link-facebook"
                        alt="facebook"
                        rel="noopener"
                    />
                </a>
                <a
                    aria-label="twitter"
                    href="https://twitter.com"
                    className="social-media-icon__link link"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        id="link-twitter"
                        alt="twitter"
                        rel="noopener"
                    />
                </a>
                <a
                    aria-label="instagram"
                    href="https://instagram.com"
                    className="social-media-icon__link link"
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        id="link-instagram"
                        alt="instagram"
                    />
                </a>
            </div>
        </section>
    );
};

export default Sitemap;
