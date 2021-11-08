import React from "react";
// import Carousel from "./Carousel";

const ProductInfo = ({
    seller,
    name,
    picture,
    details,
    discount,
    currentPrice,
    normalPrice,
}) => {
    return (
        <div className="Product">
            {/* <Carousel sliderData={picture} showDotIndex={false} /> */}
            <div className="Product__info-wrapper">
                <p className="Product__seller">{seller.toUpperCase()}</p>
                <h2 className="Product__name">{name}</h2>
                <p className="Product__details">{details}</p>
                <div className="Product__price-wrapper">
                    {discount !== 0 ? (
                        <>
                            <div className="Product__left-wrapper">
                                <p className="Product__current-price">
                                    ${currentPrice.toFixed(2)}
                                </p>
                                <p className="Product__discount">{discount}%</p>
                            </div>
                            <p className="Product__normal-price">
                                ${normalPrice.toFixed(2)}
                            </p>
                        </>
                    ) : (
                        <div className="Product__left-wrapper">
                            <p className="Product__current-price">
                                ${normalPrice.toFixed(2)}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
