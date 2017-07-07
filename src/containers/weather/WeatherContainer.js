import React, { Component } from 'react';
import { setZip } from '../../actions/WeatherCreator';
import { connect } from 'react-redux';

import Weather from '../../components/weather/Weather';

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Weather {...this.state} />
    );
  }
}

export default connect(
  state => {
    return {
      zip: state.zip,
    };
  },
  dispatch => {
    return {
      setZip: dispatch(setZip()),
    };
  }
)(WeatherContainer);
