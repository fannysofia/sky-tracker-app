import PropTypes from 'prop-types'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Button = ({ color, text_color, text, className, onClick }) => {
    const location = useLocation()
    const [bgColour, setBgColour] = useState(`${color}`)

    const buttonStyles = {
        backgroundColor: `${bgColour}`,
        color: `${text_color}`,
      };

    return (
        <>
        {location.pathname === '/sky-tracker-app' && (
            <button 
                onClick={onClick} 
                style={buttonStyles}
                className={className}
                onMouseEnter={() => setBgColour('#ADD8E6')}
                onMouseLeave={() => setBgColour(`${color}`)}
            >
                {text}
            </button>
        )}
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