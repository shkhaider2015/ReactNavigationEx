import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";




class LeftRoot extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Welcome to the LeftRoot</Text>
            </View>
        );
    }
}

export {LeftRoot};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });