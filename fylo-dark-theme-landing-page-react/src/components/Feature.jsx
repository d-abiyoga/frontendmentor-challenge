import React from "react";
import { useState } from "react";
import iconAccessAnywhere from "../assets/img/icon-access-anywhere.svg";
import iconSecurity from "../assets/img/icon-security.svg";
import iconCollaboration from "../assets/img/icon-collaboration.svg";
import iconAnyFile from "../assets/img/icon-any-file.svg";

const Feature = () => {
    const [features, setFeatures] = useState([
        {
            title: "Access your files, anywhere",
            detail: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
            icon: iconAccessAnywhere
        },
        {
            title: "Security you can trust",
            detail: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
            icon: iconSecurity
        },
        {
            title: "Real-time collaboration",
            detail: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
            icon: iconCollaboration
        },
        {
            title: "Store any type of file",
            detail: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
            icon: iconAnyFile
        },
    ]);

    return (
        <section id="features" className="features-wrapper">
            {features.map((feature) => (
                <article className="features__items" key={features.indexOf(feature)}>
                    <img className="features__icon" src={feature.icon} alt="icon" />
                    <h2 className="features__title">{feature.title}</h2>
                    <p className="features__detail">{feature.detail}</p>
                </article>
            ))}
        </section>
    );
};

export default Feature;
