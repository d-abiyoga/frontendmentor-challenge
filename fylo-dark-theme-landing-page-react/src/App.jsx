import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

const App = () => {
    return (
        <div className="App">
            <header>
                {/* To Do: Import SVG logo here */}
                <Nav />
            </header>
            <main>
                <section>
                    <h1>
                        All your files in one secure location, accessible
                        anywhere.
                    </h1>

                    <p>
                        Fylo stores all your most important files in one secure
                        location. Access them wherever you need, share and
                        collaborate with friends family, and co-workers.
                    </p>

                    <button>Get Started</button>
                </section>

                <section>
                    <h2>Access your files, anywhere</h2>
                    <p>
                        The ability to use a smartphone, tablet, or computer to
                        access your account means your files follow you
                        everywhere.
                    </p>

                    <h2>Security you can trust</h2>
                    <p>
                        2-factor authentication and user-controlled encryption
                        are just a couple of the security features we allow to
                        help secure your files.
                    </p>

                    <h2>Real-time collaboration</h2>
                    <p>
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration. No email
                        attachments required.
                    </p>

                    <h2>Store any type of file</h2>
                    <p>
                        Whether you're sharing holidays photos or work
                        documents, Fylo has you covered allowing for all file
                        types to be securely stored and shared.
                    </p>
                </section>

                <section>
                    <h2>Stay productive, wherever you are</h2>
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required. See how Fylo works
                </section>

                <Testimonial />

                <section>
                    Get early access today It only takes a minute to sign up and
                    our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you. Get
                    Started For Free
                </section>

                <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua +1-543-123-4567 example@fylo.com About Us Jobs Press
                    Blog Contact Us Terms Privacy
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
