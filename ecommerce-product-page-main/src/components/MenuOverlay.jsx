import React from "react";
import NavMenu from "./NavMenu";

const MenuOverlay = (props) => {
    return (
        <div className="MenuOverlay__wrapper">
            <NavMenu></NavMenu>
            <div className="MenuOverlay__outside" onClick={props.toggleMenu}></div>
        </div>
    );
};

export default MenuOverlay;
