import React, { useState } from 'react';
import {
  StyleSheet, 
  View,
  Text, 
  TextInput,
} from 'react-native';
import { calcDistance, calcMidpoint } from './Calculation'


const SimpleCalculator2 = () => {
  const [x1, setX1] = useState<string>((Math.random() * 20 - 10).toFixed(2).toString());
  const [y1, setY1] = useState<string>((Math.random() * 20 - 10).toFixed(2).toString());
  const [x2, setX2] = useState<string>((Math.random() * 20 - 10).toFixed(2).toString());
  const [y2, setY2] = useState<string>((Math.random() * 20 - 10).toFixed(2).toString());
  const [midpointX, setMidpointX] = useState<string>(calcMidpoint(Number(x1), Number(x2)).toString());
  const [midpointY, setMidpointY] = useState<string>(calcMidpoint(Number(y1), Number(y2)).toString());
  const [distance, setDistance] = useState<string>(calcDistance(Number(x1), Number(x2), Number(y1), Number(y2)).toString());

  return (
    <View style={styles.body}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Coordinate Calculator</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>X1</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(input) => {
            setX1(input);
            setMidpointX(calcMidpoint(Number(input), Number(x2)).toString());
            setMidpointY(calcMidpoint(Number(y1), Number(y2)).toString());
            setDistance(calcDistance(Number(input), Number(x2), Number(y1), Number(y2)).toString());
          }}
          value={x1}
          keyboardType={'numeric'}
          selectTextOnFocus={true}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Y1</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(input) => {
            setY1(input);
            setMidpointX(calcMidpoint(Number(x1), Number(x2)).toString());
            setMidpointY(calcMidpoint(Number(input), Number(y2)).toString());
            setDistance(calcDistance(Number(x1), Number(x2), Number(input), Number(y2)).toString());
          }}
          value={y1}
          keyboardType={'numeric'}
          selectTextOnFocus={true}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>X2</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(input) => {
            setX2(input);
            setMidpointX(calcMidpoint(Number(x1), Number(input)).toString());
            setMidpointY(calcMidpoint(Number(y1), Number(y2)).toString());
            setDistance(calcDistance(Number(x1), Number(input), Number(y1), Number(y2)).toString());
          }}
          value={x2}
          keyboardType={'numeric'}
          selectTextOnFocus={true}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Y2</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(input) => {
            setY2(input);
            setMidpointX(calcMidpoint(Number(x1), Number(x2)).toString());
            setMidpointY(calcMidpoint(Number(y1), Number(input)).toString());
            setDistance(calcDistance(Number(x1), Number(x2), Number(y1), Number(input)).toString());
          }}
          value={y2}
          keyboardType={'numeric'}
          selectTextOnFocus={true}
        />
      </View>

      <View style={[styles.container, {paddingTop: 50}]}>
        <Text style={[styles.label, {color:'#B71C1C'}]}>Midpoint</  Text>
        <TextInput
          style={styles.result}
          value={`(${midpointX},${midpointY})`}
          editable={false}
        />
      </View>

      <View style={styles.container}>
        <Text style={[styles.label,{color:'#B71C1C'}]}>Distance</  Text>
        <TextInput
          style={styles.result}
          value={distance}
          editable={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#E53935',
    fontWeight: 'bold',
    fontSize: 24, 
    margin: 5,
  },
  input: {
    color: 'black',
    fontSize: 24,
    margin: 5,
    textAlign: 'right',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
  },
  result: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'right',
  },
});

export default SimpleCalculator2;
