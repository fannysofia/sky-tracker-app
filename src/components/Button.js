import PropTypes from 'prop-types'
import { useState } from 'react'

const Button = ({ color, text_color, text, className, onClick }) => {
    const [bgColour, setBgColour] = useState(`${color}`)

    const buttonStyles = {
        backgroundColor: `${bgColour}`,
        color: `${text_color}`,
      };

    return (
        <>
        <button 
            onClick={onClick} 
            style={buttonStyles}
            className={className}
            onMouseEnter={() => setBgColour('#ADD8E6')}
            onMouseLeave={() => setBgColour(`${color}`)}
        >
            {text}
        </button>
        </>
    )
}

Button.defaultProps = {
    color: '#efeff2',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button