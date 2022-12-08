import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { clientGetGames, clientGetGamesReal } from '../api/api';
import { GameCard } from '../components/Votes/GameCard';
import { Header } from '../components/Votes/Header';

interface gameProps { 
  id: number; 
  name: string; 
  description: string; 
  cover: string; 
  votes: number; 
}

export function VotesScreen() {

   const [gameList, setGameList]=useState([{}])

   useEffect(()=>{

     (async () => {
       const mock =  await clientGetGames()
       const realGames =  await clientGetGamesReal()
       setGameList(realGames)

       console.log(realGames)

     })();

   },[])


  return (
    <View style={styles.container}>
      
      <Header/>

      <ScrollView style={styles.gameArea}>
        {gameList.map(game => GameCard(game))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#fff',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameArea:{
    flex:1,
    paddingTop:10,
    paddingBottom: 20,
    width:'100%'
  }
});


