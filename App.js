import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomePage } from "./components/routes";
import { MyDrawerNavigator } from "./components/routes";
import { MyStackNavigator } from "./components/routes";

import { NavigationContainer } from '@react-navigation/native';
import MyAppBar from './components/appBar';


export default function App() {


  return (
    <NavigationContainer>
        <MyDrawerNavigator />
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
