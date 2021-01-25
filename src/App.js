import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import TodayWeather from './TodayWeather';
import OtherdayWeather from './OtherdayWeather';

export default function App() {

  const [weather, setWeather] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [city, setCity] = useState('');
  const [newCity, setNewCity] = useState('Lens');
  const [data, setData] = useState();
  const [urlCity, setUrlCity] = useState();
  const [urlWeather, setUrlWeather] = useState();

  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=lens&appid=ef6e6acf960b100b476d9774b9ac20a3')
    .then(res => {
      setData(res.data);
    })
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4167&lon=2.8333&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=ef6e6acf960b100b476d9774b9ac20a3')
    .then(res => {
      setWeather(res.data.daily);
      setCurrentWeather(res.data.current);
    })
  },[]);
  
  const updateData = e => {
    e.preventDefault();
    setNewCity(city);
    setUrlCity(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef6e6acf960b100b476d9774b9ac20a3`)
    console.log('url city' + urlCity);
    axios.get(urlCity).then(response => {
      setData(response.data);
      setUrlWeather(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=ef6e6acf960b100b476d9774b9ac20a3`)
      axios.get(urlWeather).then(response => {
        setWeather(response.data.daily);
        setCurrentWeather(response.data.current);
      })
    });
    setCity('');
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <div className="weather__app">
        <SearchForm api_call={updateData} city={city} updateCity={updateCity}/>
        { currentWeather && <TodayWeather weather={currentWeather} city={newCity}/>}
        { weather && <OtherdayWeather weather={weather} />}
      </div>
  </div>
  )
}
