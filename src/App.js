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

const App = () => {
// State
const [apiData, setApiData] = useState({});
const [inputState, setInputState] = useState('Helsinki');
const [validState, setValidState] = useState('Helsinki');
const [latValue, setLat] = useState('63');
const [lonValue, setLon] = useState('21');

// Weather API KEY AND URL
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${validState}&appid=${apiKey}`;
const planetApiUrl = `https://visible-planets-api.herokuapp.com/v2?latitude=${latValue}&longitude=${lonValue}`;

// Side effect
useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
  }, [apiUrl]);
 

const inputHandler = (event) => {
  // Object.values(apiData).map(val => setLat(val.coord.lat));
  // Object.values(apiData).map(val => setLon(val.coord.lon));
  setInputState(event.target.value);
};

const submitHandler = () => {
  setValidState(inputState);
};

// Planet API:

  const [showCloudCover, setShowCloudCover] = useState(false)

  const[planets, setPlanets] = useState([])

  useEffect(() => {
    const getPlanets = async () => {
      const planetsFromServer = await fetchPlanets()
      setPlanets(planetsFromServer)
    }

    getPlanets()
  }, [])

// Fetch Planets
const fetchPlanets = async () => {
  const res = await fetch(planetApiUrl)
  console.log(planetApiUrl)
  const data = await res.json()
  const visiblePlanets = data.data

  return visiblePlanets
}

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
              <Planets planets={planets} />
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
