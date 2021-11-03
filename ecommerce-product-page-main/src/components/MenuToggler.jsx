import {React, useState} from 'react'
import HamMenuIcon from '../assets/img/icon-menu.svg'
import CloseIcon from '../assets/img/icon-close.svg'


const MenuToggler = (props) => {
    return (
        <div className="MenuToggler" onClick={props.toggleMenu}>
            {props.isMenuToggled ? 
            <img src={CloseIcon} alt="Click to expand" /> :
            <img src={HamMenuIcon} alt="Click to expand" /> 
}
        </div>
    )
}

export default MenuToggler
