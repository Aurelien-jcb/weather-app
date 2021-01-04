import React, { Component } from 'react';
import axios from 'axios';
import './TodayWeather.css';

export default class todayWeather extends Component {
    state = {
        data: "",
        lat: this.props.lat,
        lon: this.props.lon
      }
    render() {
      axios.get(this.props.url)
      .then(res => {
        this.setState({
          data: res.data,
        })
      })
      const data = this.state.data;
        if (Object.keys(data).length !== 0) {
          /* Current Day */
          const currentTemp = Math.round(data.current.temp);
          const currentDescription = data.current.weather[0].description;
          const iconName = data.current.weather[0].icon;
          const image = `http://openweathermap.org/img/w/${iconName}.png`;
          return (
            <>
              <div className="weather__current">
                <img src={image} alt=""/>
                <div className="weather__city">
                  <p className="wheather__date">Aujourd'hui</p>
                  <h1 className="weather__title">{this.props.city}</h1>
                  <p className="weather__temperature">Temperature : {currentTemp} °C</p>
                  <p className="weather__description">{currentDescription}</p>
                </div>
              </div>
            </>
        )}
        else {
          return (<p>Loading...</p>);
        }
      }
}
