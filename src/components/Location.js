import { useLocation } from 'react-router-dom'
import Button from './Button'

const Location = ({ inputHandler, getState, submitHandler }) => {
  const location = useLocation()

  return (
    <>
    {location.pathname === '/sky-tracker-app' && (
      <section className='location-wrap'>
        <label htmlFor='location-name' className='location-name'>
          Enter Location (City/Country): 
        </label>

        <input
          type='text'
          id='location-name'
          className='location-control'
          onChange={inputHandler}
          value={getState}
        />

        <Button
          text='Search'
          className='btn' 
          onClick={submitHandler}
        />
      </section>
    )}
    </>
  )
}

export default Location