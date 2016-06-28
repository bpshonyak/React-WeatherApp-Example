import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData){

    const temps = cityData.list.map( weather => weather.main.temp );
    console.log(temps);

    return (
      <tr key={cityData.city.id}>
        <td> { cityData.city.name } </td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="green"/>
          </Sparklines>
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
              <th> Temperature </th>
              <th> Pressure </th>
              <th> Humidity </th>
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
