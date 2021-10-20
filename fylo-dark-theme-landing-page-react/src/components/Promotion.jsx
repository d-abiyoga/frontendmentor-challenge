import React from "react";
import promotionImage from "../assets/img/illustration-stay-productive.png";
import iconArrow from "../assets/img/icon-arrow.svg"

const Promotion = () => {
    return (
        <section className="promotion-wrapper">
            <img
                className="promotion__image"
                src={promotionImage}
                alt="stay productive"
            />
            <h2 className="promotion__title">
                Stay productive, wherever you are
            </h2>
            <p className="promotion__copy">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
            </p>
            <p className="promotion__copy">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
            </p>
            <a className="promotion__link link" href="#">
                See how Fylo works <img src={iconArrow} alt="" />
            </a>
        </section>
    );
};

export default Promotion;
