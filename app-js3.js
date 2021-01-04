import React, { Component } from 'react';
import './App.css';
import TodayWeather from './TodayWeather';
import OtherdayWeather from './OtherdayWeather';
import axios from 'axios';

export default class App extends Component {
  state= {
    data: [],
    city: "",
    newCity: "Lens",
    url: `https://nominatim.openstreetmap.org/search/lens?format=json&limit=1`,
    urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`
  }
  componentDidMount(){
    axios.get(this.state.url)
      .then(res => {
        this.setState({
          data: res.data[0],
          lat: res.data[0].lat,
          lon: res.data[0].lon
        })
      })
  }
  
  getCity = (event) => {
    event.preventDefault();
    this.setState({city : event.target.value});
    const temp = this.state.city;
    this.setState({newCity: temp});
    this.setState({
      url: `https://nominatim.openstreetmap.org/search/${this.state.newCity}?format=json&limit=1`,
      urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`,
      city: ""
    });

  }
  updateCity = (event) => {
    this.setState({city: event.target.value});     
  }

  render() {
    const data = this.state.data;
    const lat = this.state.lat;
    const lon = this.state.lon;
    const url = this.state.url;
    const urlCity = this.state.urlCity;
    console.log(data);
    console.log(`test ${url}`);
    console.log(`test2 ${urlCity}`);
    return (
      <div className="App">
        <div className="weather__app">
          <div className="weather__container">
            <form onSubmit={this.getCity}>
              <input onChange={this.updateCity} value={this.state.city} required className="weather__input" type="text" name="city" id="city" placeholder="Entrez votre ville"/>
            </form>
            <TodayWeather city={this.state.newCity} url={urlCity}/>

            <OtherdayWeather />
          </div>
        </div>
      </div>
    )
  }
}
            // {/* longitude={this.state.cordonate[0]} latitude={this.state.cordonate[1]} */}
