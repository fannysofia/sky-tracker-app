import PropTypes from 'prop-types'
import { useState } from 'react'

const Button = ({ color, hoverColor, hoverTextColor, textColor, text, className, onClick }) => {
    const [bgColour, setBgColour] = useState(`${color}`)

    const buttonStyles = {
        backgroundColor: `${bgColour}`,
        color: `${textColor}`,
      };

    return (
        <>
        <button 
            onClick={onClick} 
            style={buttonStyles}
            className={className}
            onMouseEnter={() => setBgColour(`${hoverColor}`)}
            onMouseLeave={() => setBgColour(`${color}`)}
        >
            {text}
        </button>
        </>
    )
}

Button.defaultProps = {
    color: '#efeff2',
    hoverColor: '#B768A2',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button