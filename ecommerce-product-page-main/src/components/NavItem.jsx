import React from 'react'

const NavItem = (props) => {
    return (
        <>
            <li className="navbar__link">
                <a href="">{props.children}</a>
            </li>
        </>
    )
}

export default NavItem
