import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'; //creating a stack navigation


import AccountScreen from '../AppScreen/AccountScreen';
import LoginScreen from '../AppScreen/LoginScreen';
import RegisterScreen from '../AppScreen/RegisterScreen';
import WelcomeScreen from '../AppScreen/WelcomeScreen';
import MemoriesScreen from '../AppScreen/MemoriesScreen';
import MoreInfScreen from '../AppScreen/MoreInfScreen';
import NewPostsScreen from '../AppScreen/NewPostsScreen';
import EditScreen from '../AppScreen/EditScreen';



const Stack = createStackNavigator(); //define your Stack



function AppNavigator(props) {  //Add the order
return (
<Stack.Navigator
    initialRouteName="WelcomeScreen"
    screenOptions={{ headerShown: false }}>

    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
    <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    <Stack.Screen name="AccountScreen" component={AccountScreen}/>
    <Stack.Screen name="MemoriesScreen" component={MemoriesScreen}/>
    <Stack.Screen name="MoreInfScreen" component={MoreInfScreen}/>
    <Stack.Screen name="NewPostsScreen" component={NewPostsScreen}/>
    <Stack.Screen name="EditScreen" component={EditScreen}/>
    
    

</Stack.Navigator>

);
}

export default AppNavigator;