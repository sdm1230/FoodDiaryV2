import React, { Component } from 'react';
import { StyleSheet, Platform,View,Text } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-ionicons';

// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import MyTab from './AppTabNavigator/MyTab'
import NewTab from './AppTabNavigator/NewTab'
import MapTab from './AppTabNavigator/MapTab'

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    Home :{ screen: HomeTab },
    Map: { screen: MapTab },
    New: { screen: NewTab },
    Search: { screen: SearchTab },
    My: { screen: MyTab },
  },
  {
    swipeEnabled: true,
    tabBarPosition: "bottom",
    
    tabBarOptions:{
      activeTintColor: '#e38e8a',
      inactiveTintColor: 'gray',
      showLabel:false,
      showIcon:true, 
      
      style:{
        backgroundColor:'white'
      }
    }
  }
);
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  
  static navigationOptions = {
    header: null
  }
  
  render() {
    return <AppTabContainet/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});