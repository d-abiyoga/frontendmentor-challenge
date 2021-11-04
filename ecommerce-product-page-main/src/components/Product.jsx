import React from "react";
import Carousel from "./Carousel";

const Product = (props) => {
    return (
        <div className="Product">
            <Carousel sliderData={props.picture} showDotIndex={false} />
            <div className="Product__info-wrapper">
                <p className="Product__seller">{props.seller.toUpperCase()}</p>
                <h2 className="Product__name">{props.name}</h2>
                <p className="Product__details">{props.details}</p>
                <div className="Product__price-wrapper">
                    <div className="Product__left-wrapper">
                        <p className="Product__current-price">
                            ${props.currentPrice.toFixed(2)}
                        </p>
                        <p className="Product__discount">{props.discount}%</p>
                    </div>
                    <p className="Product__normal-price">
                        ${props.normalPrice.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;
