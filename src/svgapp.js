// import React, { Component } from 'react';
// import './App.css';
// import TodayWeather from './TodayWeather';
// import OtherdayWeather from './OtherdayWeather';
// import axios from 'axios';

// export default class App extends Component {
//   state= {
//     data: "",
//     city: "",
//     newCity: "Nice",
//     urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`
//   }
//   componentDidMount(){
//     const url = `https://nominatim.openstreetmap.org/search/${this.state.newCity}?format=json&limit=1`;
//     console.log(url);
//     axios.get(url)
//       .then(res => {
//         this.setState({
//           data: res.data[0],
//           lat: res.data[0].lat,
//           lon: res.data[0].lon,
//         })
//       })
//   }
  
//   getCity = (event) => {
//     event.preventDefault();
//     this.setState({
//       city : event.target.value
//     });
//     const temp = this.state.city;
//     this.setState({newCity: temp});
//     const url = `https://nominatim.openstreetmap.org/search/${this.state.city}?format=json&limit=1`;
//     axios.get(url)
//     .then(res => {
//       this.setState({
//         data: res.data[0],
//         lat: res.data[0].lat,
//         lon: res.data[0].lon,
//       })
//     })
//     this.setState({
//       urlCity: `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.data[0].lat}&lon=${this.state.data[0].lon}&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`,
//       city: ""
//     });

//   }
  
//   updateCity = (event) => {
//     this.setState({city: event.target.value});     
//   }

//   render() {
//     if (this.state.data) {
//       const lat = this.state.lat;
//       const lon = this.state.lon;  
//       return (
//       <div className="App">
//         <div className="weather__app">
//           <div className="weather__container">
//             <form onSubmit={this.getCity}>
//               <input onChange={this.updateCity} value={this.state.city} required className="weather__input" type="text" name="city" id="city" placeholder="Entrez votre ville"/>
//             </form>
//             <TodayWeather city={this.state.newCity} url={this.state.urlCity} lat={lat} lon={lon}/>

//             <OtherdayWeather data={this.state.data}/>
//           </div>
//         </div>
//       </div>)}
//       else {
//         return (<p>Loading...</p>);
//       } 

//   }
// }


import React, { Component, useState, useEffect } from 'react';
import './App.css';
// import TodayWeather from './TodayWeather';
// import OtherdayWeather from './OtherdayWeather';
import axios from 'axios';

export default function App() {
    const [data, setData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [city, setCity] = useState('');
    const [newCity, setNewCity] = useState('');
    const [urlCity, setUrlCity] = useState("https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758");
  
    // useEffect(() => {
    // axios.get("https://nominatim.openstreetmap.org/search/nice?format=json&limit=1")
    // .then(res => setData(res.data))
    //   axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758")
    //   .then(res => setCityData(res.data))
    // }, []);
    // useEffect(async() => {
    // axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758")
    //     .then(res => setCityData({data: res.data}))
    //   }, []);
      
      // useEffect(() => {
      // const fetchData = async () => {  
      //   const result = await axios(
      //     'https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758',
      //   );
     
      //   setCityData(result.data);
      // };
      // fetchData();
      // }, []);
      /* Test */
      const [openWeather, setWeather] = useState([]);

      useEffect(() => {
          axiosGet();
      }, []);
  
      const axiosGet = () => {
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=312ad7879c1c0ae1d97ae55fa8241758`)
          .then(data => setWeather(data.data));
      }
      const currentData = [openWeather];
      console.log(currentData);
      // const test = currentData.map(current => {
      //   return <p>{current}</p>
      // });

      /* Test */
      // const currentTemp = cityData[0].current.temp;
      // const currentDescription = cityData.current.weather.description

      // function getCity(event) {
  //   event.preventDefault();
  //   setCity(event.target.value)
  //   const temp = city;
  //   setNewCity(temp)
  //   const url = `https://nominatim.openstreetmap.org/search/${city}?format=json&limit=1`;
  //   axios.get(url)
  //   .then(res => {
  //       setCityData({cityData: res.data[0]})
  //   })
  //   setCity('');
  // }

  // function updateCity(event) {
  //     setCity(event.target.value);

  // }
  // console.log("data");
  // console.log(data);
  // console.log("cityData");
  // console.log(cityData.current);
  // console.log(currentData);
    return (
    <div className="App">
      <div className="weather__app">
        <div className="weather__container">
          {/* <form 
          // onSubmit={getCity}
          >
            <input 
            // onChange={updateCity}
             value={city} required className="weather__input" type="text" name="city" id="city" placeholder="Entrez votre ville"/>
          </form> */}
          
          <div className="weather__current">
          {/* {cityData.map(current => {
            return <p>{current.temp}</p>
          })} */}
            {/* <img src={image} alt=""/> */}
            <div className="weather__city">
              <p className="wheather__date">Aujourd'hui</p>
              <h1 className="weather__title">Lens</h1>
              <p className="weather__temperature">Temperature :  °C</p>
              <p className="weather__description">Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

//9c3cb98520f309bd159e77512e8e5e28
    // const api_call = async e => {
    //     e.preventDefault();
    //     const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.7009358&lon=7.2683912&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=9c3cb98520f309bd159e77512e8e5e28';
    //     const request = axios.get(url)
    //     const response = await request
    //     setWeather(response.data.daily);
    //     setCurrentWeather(response.data.current);
    // }
