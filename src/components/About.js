import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <h2>About</h2>
        <p className='version'>This is version 1.0 of Skytracker.</p>
        <Link to="/">Go Back</Link>
    </div>
  )
}

export default About