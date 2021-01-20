import React from 'react';
import './TodayWeather.css';

export default function TodayWeather({weather, city}) {
  return (
    <>
      <div className="weather__current">
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/>
        <div className="weather__city">
          <p className="wheather__date">Aujourd'hui</p>
          <h1 className="weather__title">{city}</h1>
          <p className="weather__temperature">Temperature : {weather.temp.toFixed(1)} °C</p>
          <p className="weather__description">{weather.weather[0].description}</p>
        </div>
      </div>
    </>
  )
}