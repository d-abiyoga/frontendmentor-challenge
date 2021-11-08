import React from "react";
import NavItem from "./NavItem";

const NavMenu = () => {
    return (
        <>
            <ul className="navbar__menu">
                <NavItem link="/collection">Collection</NavItem>
                <NavItem link="/men">Men</NavItem>
                <NavItem link="/women">Women</NavItem>
                <NavItem link="/about">About</NavItem>
                <NavItem link="/contact">Contact</NavItem>
            </ul>
        </>
    );
};

export default NavMenu;
