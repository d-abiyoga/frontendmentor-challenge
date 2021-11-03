import React from "react";
import NavItem from "./NavItem";

const NavMenu = (props) => {
    return (
        <>
            <ul className="navbar__menu">
                <NavItem link="/collection">Collection</NavItem>
                <NavItem link="/men">Men</NavItem>
                <NavItem link="/women">Women</NavItem>
                <NavItem link="/About">About</NavItem>
                <NavItem link="/Contact">Contact</NavItem>
            </ul>
        </>
    );
};

export default NavMenu;
