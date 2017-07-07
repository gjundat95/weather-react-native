import React, { Component } from 'react';
import {
  StyleSheet, View, Text,

} from 'react-native';

class Forecast extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{this.props.main}</Text>
        <Text style={styles.mainText}>Current conditions: {this.props.descriptions}</Text>
        <Text style={styles.temp}>{this.props.temp} °F</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  temp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 15,
    fontWeight: 'normal',
    backgroundColor: 'transparent',
    marginTop: 5,
  },

});

export default Forecast;
