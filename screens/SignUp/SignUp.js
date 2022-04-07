import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import RandomInput from '../../components/RandomInput';
import RandomButton from '../../components/RandomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = async () => {
    if (email && password) {
      let value = [
        {email: 'test@gmail.com', password: '123123', name: 'text'},
        {email: 'bavana@gmail.com', password: '123123', name: 'bavana'},
        {email: 'ajay@gmail.com', password: '123123', name: 'ajay'},
      ];
      value.push({email: email, password: password, name: name});
      let updatedData = JSON.stringify(value);
      AsyncStorage.setItem('userDetails', updatedData);
       navigation.navigate('login');
    } else {
      alert('Enter all details');
    }
  };
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Create an account</Text>
      <RandomInput placeholder="User name" value={name} setValue={setName} />
      <RandomInput placeholder="Email" value={email} setValue={setEmail} />
      <RandomInput
        placeholder="Password"
        secureTextEntry
        value={password}
        setValue={setPassword}
      />
      <RandomButton onPress={onSignUp} text="Sign Up" />
      <Text style={styles.logintext}>
        Already have an account.{' '}
        <Text
          style={{color: 'blue'}}
          onPress={() => navigation.navigate('login')}>
          login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',

    marginTop: 30,
    padding: 20,
  },
  logintext: {
    fontSize: 18,
  },
  logo: {
    maxHeight: 100,
    width: '70%',
    maxWidth: 300,
    marginTop: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SignUp;
