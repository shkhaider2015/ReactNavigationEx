import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";




class RightRoot extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Welcome RightRoot</Text>
            </View>
        );
    }
}

export {RightRoot};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });