import React, { useEffect, useState } from 'react';
import './TodayWeather.css';

export default function TodayWeather({weather, city}) {
  const [currentDate, setCurrenDate] = useState();
  
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const event = new Date(Date.UTC(year,month,date));
    setCurrenDate(event.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
  },[]);
  return (
    <>
      <div className="weather__current">
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/>
        <div className="weather__city">
          <p className="wheather__date">{currentDate}</p>
          <h1 className="weather__title">{city}</h1>
          <p className="weather__temperature">Temperature : {weather.temp.toFixed(1)} °C</p>
          <p className="weather__description">{weather.weather[0].description}</p>
        </div>
      </div>
    </>
  )
}