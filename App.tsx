import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import SimpleCalculator1 from './SimpleCalculator1';
import SimpleCalculator2 from './SimpleCalculator2';

const App = () => {

  return (
    <SimpleCalculator1 /> // run SimpleCalculator1
    // <SimpleCalculator2 /> // run SimpleCalculator2
  );
};

export default App;