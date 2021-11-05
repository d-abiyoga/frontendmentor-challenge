import React from "react";
import NavMenu from "./NavMenu";

const MenuOverlay = ({ isMenuToggled, handleToggleMenu }) => {
    return (
        <div
            className={
                isMenuToggled
                    ? "MenuOverlay__wrapper MenuOverlay__wrapper--toggled"
                    : "MenuOverlay__wrapper"
            }
        >
            {isMenuToggled && <NavMenu></NavMenu>}
            <div
                className={
                    isMenuToggled
                        ? "MenuOverlay__outside MenuOverlay__outside--toggled"
                        : "MenuOverlay__outside"
                }
                onClick={handleToggleMenu}
            ></div>
        </div>
    );
};

export default MenuOverlay;
