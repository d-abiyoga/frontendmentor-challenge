import React from 'react'

const Button = (props) => {
    const handleClick = (e) => {
        console.log(e)
    }
    
    return (
        <button onClick={handleClick} className={["btn",props.className].join(" ")}>
            {props.children}            
        </button>
    )
}

export default Button
