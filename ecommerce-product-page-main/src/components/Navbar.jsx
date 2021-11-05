import React from "react";
// import logo from "../assets/img/logo.svg";

const Nav = (props) => {
    return (
        <nav className="navbar">
            {props.children}
        </nav>
    );
};

export default Nav;
