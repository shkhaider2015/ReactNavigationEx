import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { MyBottomNavigator } from "./routes";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'black'
    }
  });


class Root2 extends Component {
    render() {
        console.log("Home Pag 2")
        return (
            <MyBottomNavigator />
        );
    }
}

export {Root2};

