import React from 'react'
import logo from "../assets/img/logo.svg"

const Nav = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} alt="fylo" />
            <ul className="navbar__items">
                <li><a className="navbar__link" href="#">Features</a></li>
                <li><a className="navbar__link" href="#">Team</a></li>
                <li><a className="navbar__link" href="#">Sign In</a></li>
            </ul>
            
            
            
        </nav>
    )
}

export default Nav
