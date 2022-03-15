const ShowWeather = ({ apiData }) => {
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
  <div className='weather-wrap'>
    <div className='location'>
      <h2>Weather in {apiData.name}, {apiData.sys.country}</h2>
    </div>

    <div className='icon'>
      <img
        src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
        alt='weather status icon'
        className='weather-icon'
      />
    </div>

    <div className='temperature'>
      Temperature: {kelvinToFarenheit(apiData.main.temp)}&deg; C
    </div>

    <div className='weather'>
      Weather: {apiData.weather[0].main}
    </div>

    <div className='cloud-cover'>
      Cloud Cover: {apiData.clouds.all} %
    </div>

    <div className='visibility'>
      Visibility: {apiData.visibility} meters
    </div>
  </div>
  )
}

export default ShowWeather