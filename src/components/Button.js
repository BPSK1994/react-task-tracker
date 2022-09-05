import React from 'react'

const Button = function(props) {
    
    const buttonStyle = {
        backgroundColor: props.color,
    };

    
    return(
        <button className = "header__btn"
                onClick = {props.onClick}
                style = {buttonStyle}>
                    {props.text}</button>
    )
}

export default Button