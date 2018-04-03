import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {
  renderWeather (cityData) {
    const cityName = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp - 273.15)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart data={temps} color='green' unit='°C' /></td>
        <td><Chart data={pressure} color='red' unit='hPa' /></td>
        <td><Chart data={humidity} color='black' unit='%' /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
