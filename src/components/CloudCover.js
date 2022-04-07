import PropTypes from 'prop-types'
import Button from './Button'

const CloudCover = ({ onClick, showCloudCover  }) => {
  return (
    <section className='cloudcover-wrap'>
      <article className='cloud-button-wrap'>
        <Button 
          color={showCloudCover ? '#686884' : '#efeff2'}
          textColor={showCloudCover ? '#fff' : '#222'}  
          text={showCloudCover ? 'Hide Weather Info' : 'Show Weather Info'}
          className='btn' 
          onClick={onClick} 
        />
      </article>
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