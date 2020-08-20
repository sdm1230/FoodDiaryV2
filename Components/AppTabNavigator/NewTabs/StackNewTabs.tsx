import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Album from './UploadPhoto/Album'
import UploadPlace from './UploadPlace'

const Stack = createStackNavigator();

export default function StackNewTabs(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Album">
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="UploadPlace" component={UploadPlace} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}