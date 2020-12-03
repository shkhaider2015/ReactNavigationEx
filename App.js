import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomePage } from "./components/routes";

import { NavigationContainer } from '@react-navigation/native';


export default function App() {


  return (
    <NavigationContainer>
        <HomePage />
    </NavigationContainer>
        
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
