import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons } from '@expo/vector-icons'

import {RankingScreen} from '../screens/RankingScreen'
import {VotesScreen} from '../screens/VotesScreen'

const { Screen, Navigator } = createBottomTabNavigator();


export function StackRoutes() {
  return(
    <Navigator
    screenOptions={({ route }) => ({
      headerShown: true,
      tabBarStyle: {
        height: 70,
        paddingHorizontal: 2,
        paddingTop: 0,
        backgroundColor: 'rgba(34,36,40,1)',
        position: 'absolute',
        borderTopWidth: 0,
      },
    })}
    >

      <Screen 
        name="Votes"
        component={VotesScreen}
        options={{
          tabBarLabel: 'Votar',
          tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="home" 
              color="#6DFF60" 
              size={size} 
            />
          ),
        }}
      />

      <Screen 
        name="Ranking"
        component={RankingScreen}
        options={{
          tabBarLabel: 'Ranking',
          tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="trophy" 
              color="#6DFF60"
              size={size} 
            />
          ),
        }}
      />
    
    </Navigator>
  )
}