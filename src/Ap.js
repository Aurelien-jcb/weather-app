import React, { Component, useState } from 'react';
import './App.css';
import TodayWeather from './TodayWeather';
import OtherdayWeather from './OtherdayWeather';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const [city, setCity] = useState('');
    const [newCity, setNewCity] = useState('Nice');
    const [urlCity, setUrlCity] = useState("https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758");
  state= {
    data: "",
    city: "",
    newCity: "Nice",
    urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`
  }
  componentDidMount(){
    const url = `https://nominatim.openstreetmap.org/search/nice?format=json&limit=1`;
    axios.get(url)
      .then(res => {
        setData({data: res.data[0]})
      })
  }
  
  getCity = (event) => {
    event.preventDefault();
    setCity(event.target.value)
    const temp = city;
    setNewCity(temp)
    const url = `https://nominatim.openstreetmap.org/search/${city}?format=json&limit=1`;
    axios.get(url)
    .then(res => {
        setData({data: res.data[0]})
      })
    }
    this.setState({
      urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`,
      city: ""
    });
  
  updateCity = (event) => {
      setCity(event.target.value);
  }

  render() {
    if (this.state.data) {
      const lat = this.state.lat;
      const lon = this.state.lon;  
      return (
      <div className="App">
        <div className="weather__app">
          <div className="weather__container">
            <form onSubmit={this.getCity}>
              <input onChange={this.updateCity} value={this.state.city} required className="weather__input" type="text" name="city" id="city" placeholder="Entrez votre ville"/>
            </form>
            
          </div>
        </div>
      </div>)}
      else {
        return (<p>Loading...</p>);
      } 

  }
}

export default App;