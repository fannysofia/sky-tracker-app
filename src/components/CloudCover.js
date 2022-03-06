import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const CloudCover = ({ onClick, showCloudCover  }) => {
  const location = useLocation()

  return (
    <section className='cloudcover-wrap'>
      {location.pathname === '/sky-tracker-app' && (
        <article className='cloud-button-wrap'>
          <Button 
              color={showCloudCover ? '#686884' : '#efeff2'}
              text_color={showCloudCover ? '#fff' : '#222'}  
              text={showCloudCover ? 'Hide Weather Info' : 'Show Weather Info'}
              className='btn' 
              onClick={onClick} 
            />
          </article>
        )}
    </section>
  )
}

CloudCover.defaultProps = {
    title: 'Sky Tracker',
}

CloudCover.propTypes = {
    title: PropTypes.string.isRequired,
}

export default CloudCover