import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
//reusable button component
//@params button text and type of click
const RandomButton = ({onPress,text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable >
  )
}

export default RandomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#03A9F4',
        width:'100%',
        padding:15,
        marginVertical:44,
        alignItems:'center',
        borderRadius:5
    },
    text:{
        color:'white',
        fontWeight:'bold'
        }
})
