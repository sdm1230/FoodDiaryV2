import 'react-native-gesture-handler';
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Album from './Album'
import Camera from './Camera'
import Video from './Video'

const Stack = createStackNavigator();

export default function UploadPhotoStack(){
  return (
      <Stack.Navigator initialRouteName="Album" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Album" component={Album}  />
        <Stack.Screen name="Camera" component={Camera} options={{gestureDirection:'horizontal-inverted'}} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
  );
}