import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <h2>About</h2>
        <p className='version'>This is version 1.0 of Sky Tracker App.</p>
        <p>Problems finding the correct location?</p>
        <p>In that case, define also the country abbreviation. For example: Instead of Melbourne, type Melbourne, AU.</p>
        <Link to="/">Go Back</Link>
    </div>
  )
}

export default About