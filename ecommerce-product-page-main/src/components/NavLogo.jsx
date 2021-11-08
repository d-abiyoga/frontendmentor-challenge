import React from 'react'

const NavLogo = (props) => {
    return (
        <div className="navbar__logo-wrapper">
            <span className="sr-only">Sneakers</span>
            <img className="navbar__logo" src={props.img} alt={props.alt} />   
        </div>
    )
}

export default NavLogo;