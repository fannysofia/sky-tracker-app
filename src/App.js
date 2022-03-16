import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Location from './components/Location'
import About from './components/About'
import Planets from './components/Planets'
import CloudCover from './components/CloudCover'
import Timestamp from './components/Timestamp'
import ShowWeather from './components/ShowWeather'
import Error from './components/Error'

const App = () => {
  const [apiData, setApiData] = useState({});
  const [showCloudCover, setShowCloudCover] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [inputState, setInputState] = useState('Helsinki');
  const [validState, setValidState] = useState('Helsinki');
  const [latValue, setLat] = useState('63');
  const [lonValue, setLon] = useState('21');
  const [validLocation, setValidLocation] = useState(true);

  const apiKey = process.env.REACT_APP_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${validState}&appid=${apiKey}`;
  const planetApiUrl = `https://visible-planets-api.herokuapp.com/v2?latitude=${latValue}&longitude=${lonValue}`;

  useEffect(() => {
    setValidLocation(true);
    fetch(apiUrl)
      .then((res) => { 
        if (!res.ok) {
          setValidLocation(false);
        };
        return res.json();
      })
      .then((data) => setApiData(data))
  }, [apiUrl, validState]);

  useEffect(() => {
    fetch(planetApiUrl)
      .then((res) => res.json())
      .then((data) => setPlanets(data.data))
  }, [planetApiUrl]);
  
  useEffect(() => {
    setLat(apiData?.coord?.lat);
    setLon(apiData?.coord?.lon);
  }, [apiData])

  const inputHandler = (event) => {
    setInputState(event.target.value);
  };

  const submitHandler = () => {
    setValidState(inputState);
  };

  return (
    <>
    <Router>
      <Header 
        onAdd={() => setShowCloudCover(!showCloudCover)} 
        showAdd={showCloudCover} 
      />
      <main>
        <Timestamp />
        <Location 
          inputHandler={inputHandler} 
          getState={inputState} 
          submitHandler={submitHandler} 
        />
        <Routes>
          <Route 
            path="/sky-tracker-app" 
            exact 
            element= {
              <> {apiData.main &&
              <Planets location={apiData} planets={planets} />}
              </>
            }
          />
          <Route 
            path='/sky-tracker-app/about' 
            element={<About />} 
          />
        </Routes>
      </main>
      <CloudCover 
        onClick={() => setShowCloudCover(!showCloudCover)} 
        showCloudCover={showCloudCover} 
      />
      <Routes>
      <Route 
        path="/sky-tracker-app" 
        exact  
        element= {
          <>
          {showCloudCover && apiData.main && 
            <ShowWeather apiData={apiData} />}
          </>
        }
      />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;
