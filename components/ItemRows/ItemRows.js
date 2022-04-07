import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ItemRows = ({item}) => {
  const navigation = useNavigation();
  const goToAbout = item => {
    navigation.navigate('about',{
      name:item.Country,
      code:item.CountryCode,
      newConfirmed:item.NewConfirmed,
      totalConfirmed:item.TotalConfirmed,
      newDeaths:item.NewDeaths,
      totalDeaths:item.TotalDeaths,
      newRecovered:item.NewRecovered,
      totalRecovered:item.TotalRecovered,
    });
  };
  return (
    <View
      style={{
        width: 370,
        height: 100,
        flexDirection: 'row',
        margin: 15,
        backgroundColor: 'white',
      }}>
      <Image
        style={{width: 170, height: 100, position: 'absolute'}}
        source={{uri: `https://countryflagsapi.com/png/${item.CountryCode}`}}
      />
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginLeft: 120,
            marginTop: 10,
            position: 'absolute',
          }}>
          {item.Country}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 120,
            marginTop: 40,
            position: 'absolute',
          }}>
          Total Cases :{item.TotalConfirmed}
        </Text>
        <Text
          style={{
            color: 'blue',
            fontSize: 14,
            marginLeft: 120,
            marginTop: 70,
            position: 'absolute',
          }}
          onPress={() => goToAbout(item)}>
          See more ...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    width: '100%',

    marginBottom: 8,
    padding: 10,
  },
  countryName: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default ItemRows;
