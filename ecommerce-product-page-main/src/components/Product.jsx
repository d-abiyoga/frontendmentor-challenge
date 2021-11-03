import React from "react";
import Carousel from "./Carousel";

const Product = (props) => {
    return (
        <div className="Product">
            <Carousel className="Product__slider"/>
            <div className="Product__company">{props.company}</div>
            <h2 className="Product__title">{props.name}</h2>
            <p className="Produt__details">{props.details}</p>
            <div className="Product__price-wrapper">
                <p className="Procut__current-price">${props.currentPrice}</p>
                <p className="Procut__discount">{props.discount}%</p>
                <p className="Procut__normal-price">${props.normalPrice}</p>
            </div>
        </div>
    );
};

export default Product;
