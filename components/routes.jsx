import React from 'react'
import { Root as Home } from "./root";
import { LeftRoot } from "./leftRoot";
import { RightRoot } from "./rightRoot";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppNavigator = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export const HomePage = () => {
    return(
        <AppNavigator.Navigator initialRouteName="Home" >
            <AppNavigator.Screen name="Home" component={Home} />
        </AppNavigator.Navigator>
    )
}

export const HomeChild = () => 
{
    return(
       
            <BottomTab.Navigator initialRouteName="Left" >
                <BottomTab.Screen name="Left" component={LeftRoot}  />
                <BottomTab.Screen name="Right" component={RightRoot} />
            </BottomTab.Navigator>
    )
}