import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Slideshow = ({ pictures, onMainFigureClicked }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const selectFigure = (index) => {
        setCurrentIndex(index);
    };
    return (
        <>
            <div className="slideshow">
                <figure
                    onClick={() => onMainFigureClicked()}
                    className="slideshow__selected-pict"
                    alt="product image"
                >
                    <img src={pictures[currentIndex].imgUrl} />
                </figure>
                <div className="slideshow__figures">
                    {pictures.map((picture, index) => (
                        <div
                            key={uuidv4()}
                            className="slideshow__figure-wrapper"
                            onClick={() => selectFigure(index)}
                        >
                            <img
                                src={picture.thumbnailUrl}
                                alt={picture.alt}
                                className={
                                    currentIndex === index
                                        ? "slideshow__figure figure--selected"
                                        : "slideshow__figure"
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Slideshow;
