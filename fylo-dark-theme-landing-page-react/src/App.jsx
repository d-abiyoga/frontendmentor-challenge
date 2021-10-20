import React from "react";
import Nav from "./components/Nav";
import Testimonial from "./components/Testimonial";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Attribution from "./components/Attribution";
import SignUp from "./components/SignUp";
import Promotion from "./components/Promotion";
import Sitemap from "./components/Sitemap";

const App = () => {
    return (
        <div className="App">
            <header>
                {/* To Do: Import SVG logo here */}
                <Nav />
            </header>
            <main>
                <Intro />
                <Feature />
                <Promotion />
                <Testimonial />
                <SignUp />
            </main>
            <footer>
                <Sitemap />
                <Attribution />
            </footer>
        </div>
    );
};

export default App;
