import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import trophy from '../../../assets/trophy.png'

export function Header(){
  return (
    <View style={styles.header}>

    <View>
      <Text style={styles.label}>
        GAME OF YEAR
      </Text>
    
    </View>

    <View>
      <Image source={trophy} style={styles.logo}   />
    </View>

  </View>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#65DB6B',
    borderRadius:8,
    padding:10,
    paddingLeft:50,
    width:'100%',
    flexDirection:'row',
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:5,
    height:150,
    fontSize:29
  },
  label:{
    borderColor:'#23262E',
    borderWidth: 1,
    borderRadius:5,
    padding:10,
    fontSize:22,
  },
  logo:{
    flex: 1,
    aspectRatio: 1.5,
    width: 50,
    height: 20, 
    resizeMode: 'contain'
  }
});
