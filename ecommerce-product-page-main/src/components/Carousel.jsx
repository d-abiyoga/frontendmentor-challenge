import { React, useState } from "react";
import productImage1 from "../assets/img/image-product-1.jpg";
import productImage2 from "../assets/img/image-product-2.jpg";
import productImage3 from "../assets/img/image-product-3.jpg";
import productImage4 from "../assets/img/image-product-4.jpg";
import nextIcon from "../assets/img/icon-next.svg?components";
import previousIcon from "../assets/img/icon-previous.svg?components";

const Carousel = (props) => {
    const [animate, setAnimate] = useState(0);
    const handleClick = (e) => {
        console.log(e.target);
        setAnimate(1);

        // setInterval(setAnimate(0), 1000)
    };

    return (
        <div className={"carousel " + props.className}>
            <div className="carousel__slides-wrapper">
                <div className="carousel__image-wrapper">
                    <img
                        className="carousel__product-image"
                        src={productImage1}
                        alt=""
                    />
                </div>
                <div className="carousel__image-wrapper">
                    <img
                        className="carousel__product-image"
                        src={productImage2}
                        alt=""
                    />
                </div>
                <div className="carousel__image-wrapper">
                    <img
                        className="carousel__product-image"
                        src={productImage3}
                        alt=""
                    />
                </div>
                <div className="carousel__image-wrapper">
                    <img
                        className="carousel__product-image"
                        src={productImage4}
                        alt=""
                    />
                </div>
            </div>
            <button
                className="carousel__btn carousel__btn--next"
                onClick={handleClick}
            >
                <img src={nextIcon} alt="next image" />
            </button>
            <button
                className="carousel__btn carousel__btn--previous"
                onClick={handleClick}
            >
                <img src={previousIcon} alt="previous image" />
            </button>
        </div>
    );
};

export default Carousel;
