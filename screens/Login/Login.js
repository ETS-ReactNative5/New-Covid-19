import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
//importing the necessary components and logos for this page
import Logo from '../../assets/images/covid.png';
import RandomInput from '../../components/RandomInput';
import RandomButton from '../../components/RandomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  //setting pre-defined values on page loads
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setLoginCred = () => {
    let value = JSON.stringify([
      {email: 'test@gmail.com', password: '123123',name:"text"},
      {email: 'bavana@gmail.com', password: '123123',name:"bavana"},
      {email: 'ajay@gmail.com', password: '123123',name:"ajay"},
    ]);
    AsyncStorage.setItem('userDetails', value);
  };
  //page onload function
  //@params nothing or null
  useEffect(() => {
    setLoginCred();
  }, []);
  //login functionality/logic
  const onLogin = async  () => {
    //   console.log('Hello')
    let userData = await  AsyncStorage.getItem('userDetails');
    userData = JSON.parse(userData)
    let correctDetails = false;
    for (let i = 0; i < userData.length; i++) { //used for loop 
      if (
        userData[i].email == email &&
        userData[i].password == password
      ) {
        correctDetails = true;
        navigation.navigate('home'); //user found
      } 
    }
    if(!correctDetails){ //incorrect details and user not found
        alert("Incorrect Details") //pop up with incorrect details message on the screen
    }else{
      navigation.navigate('home'); //default
    }
   
  };

  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
        //random input reusable component
      <RandomInput placeholder="Email" value={email} setValue={setEmail} />
      <RandomInput
        placeholder="Password"
        secureTextEntry
        value={password}
        setValue={setPassword}
      />
          //random button reusable component
      <RandomButton onPress={onLogin} text="Login" />
      <Text style={styles.signuptext}>
        Don't have an account.
        <Text
          style={{color: 'blue'}}
          onPress={() => navigation.navigate('signup')}>
          signup
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  signuptext: {
    fontSize: 18,
  },
  logo: {
    // maxHeight: 100,
    // width: '100%',
    // maxWidth: 300,
    height:300,
    width:300,
  },
});

export default Login;
