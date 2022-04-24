//importing resuasble components /required react native components
import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
const About = () => {
const route = useRoute()

  return (
    <View style={styles.root}>
     <Image
        style={{width: "100%", height: 250}}
        source={{uri: `https://countryflagsapi.com/png/${route.params.code}`}} //api url used to fetch country flags
      />
      <Text style={styles.head}>{route.params.name}</Text>
      <Text style={styles.subDetails}>Total Confirmed : {route.params.totalConfirmed}</Text>
      <Text style={styles.subDetails}>New Confirmed Cases : {route.params.newConfirmed}</Text>
      <Text style={styles.subDetails}>New Recovered : {route.params.newRecovered}</Text>
      <Text style={styles.subDetails}>New Deaths : {route.params.newDeaths}</Text>
      <Text style={styles.subDetails}>Total Deaths : {route.params.totalDeaths}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  root:{
    margin:10,
    backgroundColor:"white",
    height:600,
    padding:20
  },
  head:{
    fontSize:30,
    marginBottom:10,
    marginTop:10
  },
  subDetails:{
    fontSize:15,
    marginBottom:15
  }

});
