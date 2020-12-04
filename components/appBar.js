import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native'
import { Appbar } from "react-native-paper";
import { color } from 'react-native-reanimated';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

class MyAppBar extends Component {

    constructor(props) {
        super(props)

    }

    handleMenu = () => {
        console.log("Menu Clicked")
        this.props.navigation.openDrawer()
    }
    handleMagnify = () => {
        console.log("Magnify Clicked")
    }
    handleDots = () => {
        console.log("Dots Clicked")
    }
    handleBack = () => 
    {
        this.props.navigation.goBack()
    }

    render() {
        return (


            <Appbar.Header >
                { this.props.back ?  
                <Appbar.BackAction onPress={() => this.handleBack()} /> :
                <Appbar.Action icon="menu" onPress={() => this.handleMenu()} /> 
                
            
            }
                <Appbar.Content title={this.props.title} subtitle={'Subtitle'} />
                <Appbar.Action icon="magnify" onPress={() => this.handleMagnify()} />
                <Appbar.Action icon={MORE_ICON} onPress={() => this.handleDots()} />
                <StatusBar backgroundColor="#4323b8" />

            </Appbar.Header>

        );
    }
}

export default MyAppBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }
})