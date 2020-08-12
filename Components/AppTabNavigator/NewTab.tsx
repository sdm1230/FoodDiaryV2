import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-ionicons';

import { Container, Content, Thumbnail, Header, Left, Right, Body, Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import StarRating from '../star-rating'

const { width, height } = Dimensions.get('window')

export default class NewTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-add' style={{ color: tintColor }} />
        ),

    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Text style={{ color: '#e38e8a', fontWeight: 'bold', fontSize: 20, paddingHorizontal: 10, }}>S2</Text>
                    </Left>
                    <Body style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 18 }}>게시물 올리기</Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>

                <Content>
                    <ScrollView horizontal={true}>
                        <Image source={{
                            uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png'
                        }}
                            style={{ width: width, height: width }} />
                    </ScrollView>

                    <View style={{ flex:1, display: "flex" }}>
                        <View style={{ flex: 1 }}>
                            <Text>Place: </Text>
                        </View>

                        <View style={{ flex: 2, alignItems:'center' }}>
                           
                                <StarRating ratings={4} size={50} style={{}} />
                           
                        </View>

                        <View style={{ flex: 3 }}>
                            <Text>Comment </Text>
                        </View>
                    </View>
                </Content>

            </Container>
        );
    }
}