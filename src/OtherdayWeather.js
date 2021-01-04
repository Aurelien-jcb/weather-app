import React, { Component } from 'react';


export default class OtherdayWeather extends Component {
    render() {
    const data = this.props.data;
    console.log(data);
    /* Day + 1 */
    const daysOne = data.daily[1];
    const dayNameOne = new Date(daysOne.dt * 1000).toLocaleString("fr-FR", {weekday:"long"});
    const tempOne = daysOne.temp.day;
    /* Day + 2 */
    const daysTwo = data.daily[2];
    const dayNameTwo = new Date(daysTwo.dt * 1000).toLocaleString("fr-FR", {weekday:"long"});
    const tempTwo = daysTwo.temp.day;
    /* Day + 3 */
    const daysThree = data.daily[3];
    const dayNameThree = new Date(daysThree.dt * 1000).toLocaleString("fr-FR", {weekday:"long"});
    const tempThree = daysThree.temp.day;
    /* Day + 4 */
    const daysFour = data.daily[4];
    const dayNameFour = new Date(daysFour.dt * 1000).toLocaleString("fr-FR", {weekday:"long"});
    const tempFour = daysFour.temp.day;
        return (
            <div className="weather__prevision">
              <div className="weather__card --firstday">
                <p>{dayNameOne}</p>
                <p>{tempOne} °C</p>
              </div>
              <div className="weather__card --secondday">
                <p>{dayNameTwo}</p>
                <p>{tempTwo} °C</p>
              </div>
              <div className="weather__card --thirdday">
                <p>{dayNameThree}</p>
                <p>{tempThree} °C</p>
              </div>
              <div className="weather__card --fourthday">
                <p>{dayNameFour}</p>
                <p>{tempFour} °C</p>
              </div>
            </div>
        )
    }
}
