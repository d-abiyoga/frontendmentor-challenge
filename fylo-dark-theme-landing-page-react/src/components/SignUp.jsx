import React from "react";
import { useState } from "react";

const SignUp = () => {
    const [emailInvalid, setEmailInvalid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailInvalid(false);
        let submittedEmail = e.target.children[0].value;

        // Alert may not be best practice, another method to notify user to be worked on later another
        alert(`You have been registered with email adress ${submittedEmail}`);
        e.target.children[0].value = ""; // reset email value in input box
    };

    const handleInvalid = (e) => {
        e.preventDefault();
        setEmailInvalid(true);
    };

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
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        className="sign-up__input"
                        placeholder="email@example.com"
                        required
                        onInvalid={handleInvalid}
                    />
                    {emailInvalid && (
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

export default SignUp;
