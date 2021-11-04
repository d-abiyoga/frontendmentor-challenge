import React from "react";
import nextArrow from "../assets/img/icon-next.svg?components";
import prevArrow from "../assets/img/icon-previous.svg?components";

const CarouselBtn = ({ direction, moveSlide }) => {
    return (
        <button
            className={
                direction === "next"
                    ? "carousel__btn carousel__btn--next"
                    : direction === "prev" && "carousel__btn carousel__btn--prev"
            }
            onClick={moveSlide}
        >
            <img
                src={
                    direction === "next"
                        ? nextArrow
                        : direction === "prev" && prevArrow
                }
            />
        </button>
    );
};

export default CarouselBtn;
