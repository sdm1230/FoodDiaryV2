import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function StarRating({ratings, size, gap}) {
    const stars = [1, 2, 3, 4, 5]

    return (
        <View style={{ flexDirection: 'row' }}>
            {stars.filter(x => (x <= ratings)).map((x,index) => {
                return (<Icon key={index} name='ios-star' style={{ fontSize: size,color:"#e38e8a",paddingHorizontal:gap }} />)
            })}
            {stars.filter(x => (x > ratings)).map((x,index) => {
                return (<Icon key={index} name='ios-star-outline' style={{ fontSize: size,paddingHorizontal:gap }} />)
            })}
        </View>
    );
}