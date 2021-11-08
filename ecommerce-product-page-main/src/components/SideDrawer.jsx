import React from "react";
import NavMenu from "./NavMenu";

const SideDrawer = ({ isMenuToggled, handleToggleMenu }) => {
    return (
        <>
            <div
                className={
                    isMenuToggled
                        ? "side-drawer__wrapper side-drawer__wrapper--open"
                        : "side-drawer__wrapper"
                }
            >
                {isMenuToggled && <NavMenu></NavMenu>}
            </div>
            <div
                className={
                    isMenuToggled
                        ? "side-drawer__backdrop side-drawer__backdrop--open"
                        : "side-drawer__backdrop"
                }
                onClick={handleToggleMenu}
            ></div>
        </>
    );
};

export default SideDrawer;
