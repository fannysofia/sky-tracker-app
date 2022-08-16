import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='about'>
        <h2>Page not found</h2>
        <Link to="/sky-tracker-app">Go Back</Link>
    </div>
  )
}

export default NotFound