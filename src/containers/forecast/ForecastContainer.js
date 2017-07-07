import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setForecast } from '../../actions/WeatherCreator';


class ForecastContainer extends Component {
  render() {
    return (
    );
  }
}

export default connect(
  state=>{
    return {
      main: state.main,
      descriptions: state.descriptions,
      temp: state.temp,
    };
  }
)(ForecastContainer);
