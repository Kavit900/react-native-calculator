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
  Button,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    let nums =[[1,2,3], [4,5,6], [7,8,9], [0,0,'=']];
    let rows = [];
    for(let i=0; i<4; i++) {
      let row = [];
      for(let j=0; j<3; j++) {
        row.push(
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let operations = ['+', '-', '*', '/'];
    let ops = [];
    for(let i=0; i<4; i++) {
      ops.push(
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
        </TouchableOpacity>
      );
    }

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
              {rows}
          </View>
          <View style={styles.operations}>
            {ops}
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
  btnText: {
    fontSize: 30
  },
  white: {
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
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
