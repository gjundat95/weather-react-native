import React, { Component } from 'react';
import {
  StyleSheet,
  Text, TextInput,
  Image, Button,
} from 'react-native';

import Forecast from '../forecast/Forecast';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: {
        main: 'clouds',
        descriptions: 'few clouds',
        temp: 45,
      },
    };
  }

  getData =()=>{
    fetch('http://samples.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=1&appid=b1b15e88fa797225412429c1c50c122a1')
      .then((res)=> res.json())
      .then((resJson)=> {
        console.warn(`weather - ${resJson.cod}`);
        this.setState({
          main: resJson.message,
          descriptions: resJson.cod,
          temp: resJson.count,
        });
      })
      .catch((error)=>{
        console.warn(error);
      });
  }

  _changeText=(zip)=>{
    this.setState({ zip });
  }

  render() {
    return (
      <Image
        source={require('../../img/background3.jpg')}
        style={styles.backgroundImage}
        blurRadius={7}
      >
        <Image
          style = {styles.imageTop}
          source = {{ uri: 'https://3.bp.blogspot.com/-FF4yy-008L8/WV77BeoV7bI/AAAAAAAAOhg/2Fq05ieLp-8-MzN5dWY3LRnxXL7jygvLACLcBGAs/s1600/whyvscode_macwinlinux2.png' }}
        />
        <Text style={styles.bigText}>Your input: {this.state.zip}</Text>
        <Forecast
          main = {this.state.forecast.main}
          descriptions = {this.state.forecast.descriptions}
          temp = {this.state.forecast.temp}
        />
        <TextInput
          style = {styles.textInput}
          value={this.state.zip}
          onChangeText = {this._changeText}
        />
        <Button
          onPress={this.getData}
          title="get Data"
        />
      </Image>
    );
  }
}

export default Weather;

const styles = StyleSheet.create({
  bigText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
  },
  textInput: {
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    padding: 10,
    backgroundColor: 'transparent',
    color: 'white',
  },
  imageTop: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
