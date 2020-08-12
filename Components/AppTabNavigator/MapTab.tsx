import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button,Container, Content, Header, Footer } from 'native-base';
import Icon from 'react-native-ionicons';
import CardPlace from '../CardPlace';

export default class SearchTab extends Component {
    
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-map' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Text style={{color: '#e38e8a',fontWeight:'bold', fontSize: 20,paddingHorizontal: 10,}}>S2</Text>
                    </Left>
                    <Body style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>서울시 관악로 17길</Text>
                        <Icon name='arrow-dropdown-circle' style={{ color: 'skyblue', fontSize: 20, paddingHorizontal: 6 }} />
                    </Body>
                    <Right>
                        <Icon name='ios-list' style={{ color: '#e38e8a', paddingRight: 10,}} />
                    </Right>
                </Header>

                <Content>
                   <CardPlace />
                </Content>

            </Container>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});