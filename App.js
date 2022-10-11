import React from 'react'

import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {colors} from './src/global/styles'
import SignInScreen from "./src/screens/authScreens/SignInScreen"
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen'
import HomeScreen from './src/screens/HomeScreen'

export default function App(){
  return (
    <View style = {styles.container}>
      <StatusBar barStyle = "light-content" backgroundColor = {colors.statusbar}/>
    
    <HomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
