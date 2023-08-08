

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Homescreen from './src/Screen/homescreen';
import Header from './src/Header/Header';


function App() {
  
  return (
    <SafeAreaView>
      <Homescreen/>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
