import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ClassScreen from './screens/ClassScreen';
import SubjectScreen from './screens/SubjectScreen';
import SolutionScreen from './screens/SolutionScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
export default function App() {
  return (
    <AppContainer/>
  );
}
 const SwitchNavigator=createSwitchNavigator({
   HomeScreen:{screen:HomeScreen},
   ClassScreen:{screen:ClassScreen},
   SubjectScreen:{screen:SubjectScreen},
   SolutionScreen:{screen:SolutionScreen},
 })
 const AppContainer =createAppContainer (SwitchNavigator)
 
