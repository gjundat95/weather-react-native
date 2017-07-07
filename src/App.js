/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { WeatherReducer } from './reducers/WeatherReducer';

import WeatherContainer from './containers/weather/WeatherContainer';

const store = createStore(WeatherReducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    );
  }
}

export default App;
