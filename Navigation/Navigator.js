import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



import HomeScreen from '../Screeen/HomeScreen';
import loginScreen from '../Screeen/loginScreen';
import registerScreen from '../Screeen/registerScreen';
import cameraScreen from '../Screeen/cameraScreen';
// import dimensionsScreen from '../Screeen/dimensionsScreen';



const Navigator = createStackNavigator({
    Home: HomeScreen,
    Login: {
        screen: loginScreen
    },
    Register: registerScreen,
    Camera: cameraScreen,
    // Dimensions: dimensionsScreen,
});
const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={25} />
            )
        }
    },
    Login: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Entypo name="login" size={24} color="black" />
            )
        }
    },
    Register: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <FontAwesome5 name="registered" size={24} color="black" />
            )
        }
    },
    Camera: {
        screen: Navigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Entypo name="camera" size={24} color="black" />
            )
        }
    },
},
);
export default createAppContainer(DrawerNavigation);