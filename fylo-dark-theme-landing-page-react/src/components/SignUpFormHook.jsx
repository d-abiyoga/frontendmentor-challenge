import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

const SignUpFormHook = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        event.preventDefault() 
        console.log(data);
    }

    renderCount++;
    console.log(renderCount++)

    console.log(watch("email"))

    return (
        <section className="sign-up-wrapper">
            <div className="sign-up-card">
                <h2 className="sign-up__title">Get early access today</h2>
                <p className="sign-up__copy">
                    It only takes a minute to sign up and our free starter tier
                    is extremely generous. If you have any questions, our
                    support team would be happy to help you.
                </p>
                <form
                    className="sign-up__form"
                    action="submit"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="email"
                        className="sign-up__input"
                        placeholder="email@example.com"
                        required
                        {...register("email")}
                    />
                    {errors.email?.type && (
                        <div className="form-error">
                            Please enter a valid email address
                        </div>
                    )}
                    <button type="submit" className="sign-up__btn btn">
                        Get Started For Free
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignUpFormHook;
