//importing resuasble components /required react native components
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
//importing resuable components
import ItemRows from '../../components/ItemRows';
const Home = () => {
  //setting pre-defined values
  const url = 'https://api.covid19api.com/summary';  //API url used for covid summary
  const [filteredData, setfilteredData] = useState([]); 
  const [masteredData, setmasteredData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  const [search, setsearch] = useState('');
  //on page load functionality
  useEffect(() => {
    setIsloading(true);
    const fetchCovidData = async () => { //fetching covid data
      setIsloading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setfilteredData(response.Countries);
        setmasteredData(response.Countries);
        setIsloading(false);
      } catch (e) {}
    };
    fetchCovidData();
  }, []);
  //search by country by keywords
  const check = text => {
    
    if (text) {
      const newData = masteredData.filter(item => { 
        const itemData = item.Country 
          ? item.Country.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setsearch(text);
    } else {
      setfilteredData(masteredData); //filteringData that is mastered data
      setsearch(text);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            height: 140,
          }}>
          <Text style={styles.casesHeading}>Covid Cases by Country </Text> 
//covid cases by country
         
            <Text style={styles.casesDate}>
              {new Date().getDate()}-{new Date().getMonth() + 1}-
              {new Date().getFullYear()}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Search by Contry"
              value={search}
              onChangeText={text => check(text)}
            />
         
        </View>
      </View>
//list of countries rendered
      <View style={styles.flatList}>
        <FlatList
          data={filteredData}
          renderItem={({item}) => <ItemRows item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  covidHeading: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 0,
  },
  cards: {
    marginTop: -90,
  },
  casesHeading: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  casesDate: {
    color: 'black',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  flatList: {
    marginTop: 10,
    elevation: 8,
  },
  input: {
    marginTop: 20,
    backgroundColor: 'white',
    width: '90%',
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Home;
