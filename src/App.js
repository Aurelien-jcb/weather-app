import React, { Component } from 'react';
import './App.css';
import TodayWeather from './TodayWeather';
import OtherdayWeather from './OtherdayWeather';
import axios from 'axios';

export default class App extends Component {
  state= {
    data: "",
    city: "",
    newCity: "Nice",
    urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`
  }
  componentDidMount(){
    const url = `https://nominatim.openstreetmap.org/search/${this.state.newCity}?format=json&limit=1`;
    console.log(url);
    axios.get(url)
      .then(res => {
        this.setState({
          data: res.data[0],
          lat: res.data[0].lat,
          lon: res.data[0].lon,
        })
      })
  }
  
  getCity = (event) => {
    event.preventDefault();
    this.setState({
      city : event.target.value
    });
    const temp = this.state.city;
    this.setState({newCity: temp});
    const url = `https://nominatim.openstreetmap.org/search/${this.state.city}?format=json&limit=1`;
    axios.get(url)
    .then(res => {
      this.setState({
        data: res.data[0],
        lat: res.data[0].lat,
        lon: res.data[0].lon,
      })
    })
    this.setState({
      urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.data[0].lat}&lon=${this.state.data[0].lon}&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`,
      city: ""
    });

  }
  
  updateCity = (event) => {
    this.setState({city: event.target.value});     
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
            <TodayWeather city={this.state.newCity} url={this.state.urlCity} lat={lat} lon={lon}/>

            <OtherdayWeather data={this.state.data}/>
          </div>
        </div>
      </div>)}
      else {
        return (<p>Loading...</p>);
      } 

  }
}
