import React, { Component } from 'react';
import { Platform, StyleSheet} from 'react-native'
import { Appbar } from "react-native-paper";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

class MyAppBar extends Component {

    constructor(props) {
        super(props)
        
    }

    handleMenu = () => 
    {
        console.log("Menu Clicked")
        this.props.navigation.openDrawer()
    }
    handleMagnify = () => 
    {
        console.log("Magnify Clicked")
    }
    handleDots = () => 
    {
       console.log("Dots Clicked")   
    }

    render() {
        return (
            
            <Appbar.Header style={styles.appbar} >
            <Appbar.Action icon="menu" onPress={() => this.handleMenu() } />
            <Appbar.Content title={this.props.title} subtitle={'Subtitle'} />
            <Appbar.Action icon="magnify" onPress={() => this.handleMagnify() } />
            <Appbar.Action icon={MORE_ICON} onPress={() => this.handleDots() } />
        </Appbar.Header>
        );
    }
}

export default MyAppBar;

const styles = StyleSheet.create({
    appbar : {
        position : 'relative',
        marginStart : 0,
        left : 0
    }
})