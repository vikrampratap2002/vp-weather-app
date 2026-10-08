import React, { useState } from 'react'
import Header from "../src/components/Header"
import Search from "../src/components/Search"
import WeatherCard from "../src/components/WeatherCard"
import Footer from "../src/components/Footer"
import '../src/App.css'

const App = () => {

  const [weatherDetails, setWeatherDetails] = useState(null);
  console.log(weatherDetails);
  
  return (
    <div className='app'>
      <div className='app-container'>
      <Header/>
        <Search setWeatherDetails={setWeatherDetails}/>
      {weatherDetails && <WeatherCard weatherDetails={weatherDetails}/>}
      <Footer />
       </div>
    </div>
  )
}

export default App