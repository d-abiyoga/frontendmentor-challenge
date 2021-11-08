import React from 'react'
import HamMenuIcon from '../assets/img/icon-menu.svg'
import CloseIcon from '../assets/img/icon-close.svg'


const MenuToggler = (props) => {
    return (
        <button aria-label="menu-toggle" className="menu-toggler" onClick={props.onToggle}>
            {props.isMenuToggled ? 
            <img src={CloseIcon} alt="Click to close menu" aria-hidden="true"/> :
            <img src={HamMenuIcon} alt="Click to expand" aria-hidden="true"/> 
}
        </button>
    )
}

export default MenuToggler
