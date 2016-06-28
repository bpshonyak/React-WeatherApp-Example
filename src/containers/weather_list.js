import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData){

    const { lat, lon } = cityData.city.coord;

    const temps = cityData.list.map( weather => weather.main.temp );
    const tempColor = "orange";

    const pressure = cityData.list.map( weather => weather.main.pressure );
    const pressureColor = "grey";

    const humidity = cityData.list.map( weather => weather.main.humidity );
    const humidityColor = "red";

    console.log(temps);

    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color={tempColor} units={"K"} />
        </td>
        <td>
          <Chart data={pressure} color={pressureColor} units={"hPa"} />
        </td>
        <td>
          <Chart data={humidity} color={humidityColor} units={"%"} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">

          <thead>
            <tr>
              <th> City </th>
              <th> Temperature (K)</th>
              <th> Pressure (hPa)</th>
              <th> Humidity (%)</th>
            </tr>
          </thead>

          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>

        </table>
      </div>
    );
  }
}

// Pre-process state
function mapStateToProps({ weather }) { // { weather } ==  weather = state.weather
  // Whatever is returned will show up as props
  // inside the WeatherList class.
  return { weather }; // { weather } == { weather: weather}
}

// Export WeatherList as a container
export default connect(mapStateToProps)(WeatherList);
