import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

import { NavigationContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function UploadPlace({navigation}){
    
    return(
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:90,paddingHorizontal:16,paddingTop:40}}>
                 <Button title="뒤로" onPress={() => navigation.goBack()} />
                <Button title="다음" onPress={()=> navigation.push('UploadComment')}/>
            </View>
            <Text>장소검색란</Text>
        </View>
    )
}