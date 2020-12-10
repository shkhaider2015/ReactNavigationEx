import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";
import MyAppBar from './appBar';
import { MyBottomNavigator } from "./routes";
import { LeftRoot } from "./leftRoot";
import  RightRoot  from "./rightRoot";


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


class Root extends Component {
    render() {
        console.log("Home Pag")
        return (
            <MyBottomNavigator cm1={LeftRoot} cm2={RightRoot}  />
        );
    }
}

export {Root};


