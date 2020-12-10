import React from 'react'
import { Root as Home } from "./root";
import { Root2 as Home2 } from "./root2";
import { LeftRoot } from "./leftRoot";
import LeftProfileRoot from "./leftProfile";
import  RightRoot  from "./rightRoot";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./drawerContent";
import MyAppBar from './appBar';
import { View } from 'react-native';

const AppNavigator = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const DrawerNav = createDrawerNavigator()

const initialRN = "Home"

export const MyStackNavigator = () => {
    return (
            <AppNavigator.Navigator initialRouteName={"Home"}  >

                <AppNavigator.Screen name="Home" component={Home} options={{ 
                    header : props => <MyAppBar {...props} title="Home" back={false} />, 
                    // headerStyle : {} 
                
                }}
                    />
                <AppNavigator.Screen name="profile" component={Home2}  
                options={{ 
                    header : props => <MyAppBar {...props} title="Profile" back={true} />, 
                    // headerStyle : {}
                }}
                />
            </AppNavigator.Navigator>
    )
}

export const MyBottomNavigator = ({ cm1, cm2 }) => {
    return (

        <BottomTab.Navigator initialRouteName="Left" >
            <BottomTab.Screen name="Left" component={cm1} />
            <BottomTab.Screen name="Right" component={cm2} />
        </BottomTab.Navigator>
    )
}

export const MyDrawerNavigator = () => {
    return (
        <DrawerNav.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
            <DrawerNav.Screen name="Home" component={MyStackNavigator} />
        </DrawerNav.Navigator>
    )
}