import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from '../../assets/images/covid.png';
import RandomInput from '../../components/RandomInput';
import RandomButton from '../../components/RandomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
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
  useEffect(() => {
    setLoginCred();
  }, []);
  const onLogin = async  () => {
    //   console.log('Hello')
    let userData = await  AsyncStorage.getItem('userDetails');
    userData = JSON.parse(userData)
    let correctDetails = false;
    for (let i = 0; i < userData.length; i++) {
      if (
        userData[i].email == email &&
        userData[i].password == password
      ) {
        correctDetails = true;
        navigation.navigate('home');
      } 
    }
    if(!correctDetails){
        alert("Incorrect Details")
    }else{
      navigation.navigate('home');
    }
   
  };

  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <RandomInput placeholder="Email" value={email} setValue={setEmail} />
      <RandomInput
        placeholder="Password"
        secureTextEntry
        value={password}
        setValue={setPassword}
      />
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
