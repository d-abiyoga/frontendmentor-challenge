import React, { useState } from "react";
import ArrowBtn from "./ArrowBtn";
import { ReactComponent as CloseBtnIcon } from "../assets/img/icon-close.svg";

const Lightbox = ({ pictures, handleClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(
            currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(
            currentIndex !== 0 ? currentIndex - 1 : pictures.length - 1
        );
    };

    const selectFigure = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="lightbox-overlay">
                <div className="lightbox">
                    <button
                        autoFocus
                        type="button"
                        onClick={handleClick}
                        className="close-btn"
                    >
                        <span className="sr-only">Close</span>
                        <CloseBtnIcon viewBox="0 0 14 14" aria-hidden="true" />
                    </button>
                    <figure className="lightbox__current-pict">
                        <img
                            className="lightbox__current-pict-img"
                            src={pictures[currentIndex].imgUrl}
                        />{" "}
                        <ArrowBtn direction="next" moveSlide={nextSlide} />
                        <ArrowBtn direction="prev" moveSlide={prevSlide} />
                    </figure>
                    <div className="lightbox__figures">
                        {pictures.map((picture, index) => (
                            <div
                                key={picture.id}
                                onClick={() => selectFigure(index)}
                                className={
                                    currentIndex === index
                                        ? "lightbox__figure-wrapper selected"
                                        : "lightbox__figure-wrapper"
                                }
                            >
                                <img
                                    src={picture.thumbnailUrl}
                                    alt={picture.alt}
                                    className="lightbox__figure"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lightbox;
