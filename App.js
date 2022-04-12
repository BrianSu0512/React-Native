import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './APP/AppScreen/AccountScreen';
import LoginScreen from './APP/AppScreen/LoginScreen';
import MemoriesScreen from './APP/AppScreen/MemoriesScreen';
import MoreInfScreen from './APP/AppScreen/MoreInfScreen';
import RegisterScreen from './APP/AppScreen/RegisterScreen';
import NewPostsScreen from './APP/AppScreen/NewPostsScreen';
import WelcomeScreen from './APP/AppScreen/WelcomeScreen';

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './APP/Navigation/AppNavigator';





export default function App() {
  return (
  <NavigationContainer>
  <AppNavigator />
  </NavigationContainer>


  


  );
}

const styles = StyleSheet.create({

});
