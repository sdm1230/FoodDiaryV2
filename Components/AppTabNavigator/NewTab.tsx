import 'react-native-gesture-handler';
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import UploadPhotoStack from './NewTabs/UploadPhoto/UploadPhotoStack'
import UploadPlace from './NewTabs/UploadPlace'
import UploadComment from './NewTabs/UploadComment'
import MyTab from './MyTab'

const Stack = createStackNavigator();

export default function NewTab(){
  return (
      <Stack.Navigator initialRouteName="UploadPhoto" screenOptions={{headerShown:false}}>
        <Stack.Screen name="UploadPhoto" component={UploadPhotoStack} />
        <Stack.Screen name="UploadPlace" component={UploadPlace} />
        <Stack.Screen name="UploadComment" component={UploadComment} />
        <Stack.Screen name="MyTab" component={MyTab} />
      </Stack.Navigator>
  );
}