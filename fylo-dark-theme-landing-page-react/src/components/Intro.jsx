import React from "react";
import IntroIllustration from "../assets/img/illustration-intro.png";

const Intro = () => {
    return (
        <section className="intro__wrapper">
            <img
                className="intro__illustration"
                src={IntroIllustration}
                alt="two people accessing documents from a folder"
            />
            <h1 className="intro__heading">
                All your files in one secure location, accessible anywhere.
            </h1>
            <p className="intro__description">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
            </p>

            <button className="intro__btn btn">Get Started</button>
        </section>
    );
};

export default Intro;
