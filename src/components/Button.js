import React from "react";
import './Button.css'

const STYLES = [
    'btn--primary', 
    'btn--outline'
]

const SİZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    ButtonSize,
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SİZES.includes(ButtonSize) ? ButtonSize : SİZES[0]

    return (
        <button className={"btn ${checkButtonStyle} ${checkButtonSize}"} onClick={onClick} 
        type={type}>
            {children}
            </button>
    )
}
