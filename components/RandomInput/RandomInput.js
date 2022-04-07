import { View, Text,TextInput,StyleSheet } from 'react-native';
import React from 'react';

const RandomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input}
      value={value} onChangeText={setValue} secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:2,
        borderRadius:5,
        paddingHorizontal:10,
        
    },
    input:{
    }
})

export default RandomInput