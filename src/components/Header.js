import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
        <h1 className='page-header'>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Sky Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header