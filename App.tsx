import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

//V5로 업그레이드 이후

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyTab from './Components/AppTabNavigator/MyTab'
import NewTab from './Components/AppTabNavigator/NewTab'
import MapTab from './Components/AppTabNavigator/MapTab'

const Tab = createBottomTabNavigator();

function RootStack() {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#e38e8a",
        inactiveTintColor: "gray",
      }}>
      <Tab.Screen name="Map" component={MapTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-map' style={{ color: tintColor, fontSize:20}} />
          ),
        }}
      />
      <Tab.Screen name="New" component={NewTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-add' style={{ color: tintColor, fontSize:20 }} />
          )
        }}
      />
      <Tab.Screen name="My" component={MyTab}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-person' style={{ color: tintColor, fontSize:20 }} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
