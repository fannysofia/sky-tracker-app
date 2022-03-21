import Button from './Button'

const Location = ({ inputHandler, getState, submitHandler }) => {
  return (
    <>
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
    </>
  )
}

export default Location