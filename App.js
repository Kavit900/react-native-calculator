/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>11*11</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
              <View style={styles.row}>
                <Button title="0" />
                <Button title="0" />
                <Button title="0" />
              </View>
              <View style={styles.row}>
                <Button title="0" />
                <Button title="0" />
                <Button title="0" />
              </View>
              <View style={styles.row}>
                <Button title="0" />
                <Button title="0" />
                <Button title="0" />
              </View>
              <View style={styles.row}>
                <Button title="0" />
                <Button title="0" />
                <Button title="0" />
              </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" />
            <Button title="+" />
            <Button title="+" />
            <Button title="+" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  result: {
    flex: 1, // result takes 10% of the screen
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 2, // calculation takes 20% of the screen
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7, // flex of 7 takes 70% of the screen
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
});
