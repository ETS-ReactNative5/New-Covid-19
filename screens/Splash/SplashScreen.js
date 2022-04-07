import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
const Splash = () => { 
  const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
          SplashScreen.hide();
          navigation.navigate('login')
        }, 1000);
      }, []);
  return (
    <View>
     
    </View>
  )
}

export default Splash