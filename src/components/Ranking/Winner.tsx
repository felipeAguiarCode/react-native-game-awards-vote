import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function Winner(){

  return (
  <View>
      <Image 
        source={{uri: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4tt2.png'}}
        style={styles.card} 
      />
      <Text style={styles.gameLabel}>STRAY</Text>
      <Text style={styles.winnerLabel}>WINNER</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#fff',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    borderWidth:3,
    borderColor:'#fff',
    borderRadius:30
  },
  gameLabel:{
    color:'#fff',
    textAlign:'center',
    fontSize:22
  },
  winnerLabel:{
    backgroundColor:'#0EC244',
    borderRadius:4,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
    paddig:10
  },
  card:{
    borderRadius:10,
    width: 200, 
    height: 300,
  }
});
