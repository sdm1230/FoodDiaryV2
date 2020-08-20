import React, { Component } from 'react';
import { StyleSheet, Platform,View,Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

// 하단 탭에 들어갈 컴포넌트들
import Camera from './NewTabs/UploadPhoto/Camera'
import Album from './NewTabs/UploadPhoto/Album'
import Video from './NewTabs/UploadPhoto/Video'

import StackNewTabs from './NewTabs/StackNewTabs'

// 하단 탭 네비게이터 생성
const NewTabNavigator = createMaterialTopTabNavigator(
  {
    Camera: { screen: Camera },
    Album: { screen: StackNewTabs },
    Video: { screen: Video },
  },
  {
    swipeEnabled: true,
    tabBarPosition: "bottom",
    
    tabBarOptions:{
      activeTintColor: '#e38e8a',
      inactiveTintColor: 'gray',
      showLabel:true,
      showIcon:true, 
      
      style:{
        backgroundColor:'white'
      }
    }
  }
);
const NewTabContainet = createAppContainer( NewTabNavigator);

export default class NewTab extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-add' style={{ color: tintColor }} />
    )
  }
  
  render() {
    return (
        
        <NewTabContainet/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});