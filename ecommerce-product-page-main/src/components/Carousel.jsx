import { React, useState } from "react";
import { useSwipeable } from "react-swipeable";
import CarouselBtn from "./CarouselBtn";

const Carousel = ({sliderData, showDotIndex}) => {
    // slideIndex set as 1-indexed
    const [slideIndex, setSlideIndex] = useState(1);
    const slides = sliderData;

    const nextSlide = () => {
        setSlideIndex(slideIndex === slides.length ? 1 : slideIndex + 1);
    };

    const prevSlide = () => {
        setSlideIndex(slideIndex !== 1 ? slideIndex - 1 : slides.length);
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    const swipeHandler = useSwipeable ({
        onSwipedRight: () => prevSlide(),
        onSwipedLeft: () => nextSlide()
    })

    return (
        <div className={"carousel__wrapper"}>
            <div className="carousel__slides-wrapper">
                {slides.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={
                                slideIndex === index + 1
                                    ? "carousel__image-wrapper slide active-anim"
                                    : "carousel__image-wrapper slide"
                            }
                        >
                            <img
                                {...swipeHandler}
                                className="carousel__product-image"
                                src={new URL(obj.imgUrl, import.meta.url).href}
                                alt={obj.alt}
                            />
                        </div>
                    );
                })}
            </div>
            <CarouselBtn direction="prev" moveSlide={prevSlide} />
            <CarouselBtn direction="next" moveSlide={nextSlide} />
            {showDotIndex && (
                <div className="container-dots">
                    {Array.from({ length: slides.length }).map(
                        (item, index) => (
                            <div
                                onClick={() => moveDot(index + 1)}
                                className={
                                    slideIndex === index + 1
                                        ? "dot active"
                                        : "dot"
                                }
                            ></div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Carousel;
