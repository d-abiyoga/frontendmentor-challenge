import React from "react";
import { ReactComponent as NextArrowsvg } from "../assets/img/icon-next.svg";
import { ReactComponent as PrevArrowsvg } from "../assets/img/icon-previous.svg";

const ArrowBtn = ({ direction, moveSlide }) => {
    return (
        <>
            {direction === "next" ? (
                <button
                    aria-label="click for next image"
                    className="btn__arrow btn__arrow--next"
                    onClick={moveSlide}
                >
                    <NextArrowsvg aria-hidden="true" />
                </button>
            ) : (
                <button
                    aria-label="click for previous image"
                    className="btn__arrow btn__arrow--prev"
                >
                    <PrevArrowsvg aria-hidden="true" />
                </button>
            )}
        </>
    );
};

export default ArrowBtn;
