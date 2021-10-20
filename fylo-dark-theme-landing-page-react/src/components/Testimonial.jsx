import React from "react";
import { useState } from "react";
import profile1 from "../assets/img/profile-1.jpg"
import profile2 from "../assets/img/profile-2.jpg"
import profile3 from "../assets/img/profile-3.jpg"

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([
        {
            comment:
                "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            person: "Satish Patel",
            personTitle: "Founder & CEO, Huddle",
            photo: profile1
        },
        {
            comment:
                "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            person: "Bruce McKenzie",
            personTitle: "Founder & CEO, Huddle",
            photo: profile2,
        },
        {
            comment:
                "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            person: "Iva Boyd",
            personTitle: "Founder & CEO, Huddle",
            photo: profile3,
        },
    ]);

    return (
        <section className="testimonial-wrapper">
            {testimonials.map((testimonial) => (
                <figure className="testimonial__card"key={testimonials.indexOf(testimonial)}>
                    <blockquote className="testimonial__testimony">{testimonial.comment}</blockquote>
                    
                    <figcaption className="testimonial__person">
                    <img
                        className="testimonial__person-picture"
                        src={testimonial.photo}
                        alt={`headshot photo of ${testimonial.person}`}
                    />
                        <p className="testimonial__person-name">{testimonial.person}</p>
                        <small className="testimonial__person-title">{testimonial.personTitle}</small>
                    </figcaption>
                </figure>
            ))}
        </section>
    );
};

export default Testimonial;
