/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//importing resuasble components /required react native components
import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//manually importing of reusable components
import Splash from './screens/Splash/SplashScreen'; //importing splash
import Login from './screens/Login'; //importing login screen
import SignUp from './screens/SignUp'; //importing signup
import Home from './screens/Home'; //importing home
import About from './screens/About'; //importing About
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    //navigation controls
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
