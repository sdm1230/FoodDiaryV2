
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Container, Content, Header, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import CardPlace from '../CardPlace';

export default function MapTab() {
    return (
        <Container>
            <Header>
                <Left>
                    <Text style={{ color: '#e38e8a', fontWeight: 'bold', fontSize: 20, paddingHorizontal: 10, }}>S2</Text>
                </Left>
                <Body style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>서울시 관악로 17길</Text>
                    <Icon name='ios-caret-down-outline' style={{ color: 'skyblue', fontSize: 20, paddingHorizontal: 6 }} />
                </Body>
                <Right>
                    <Icon name='ios-list' style={{ color: '#e38e8a', paddingRight: 10,fontSize:20 }} />
                </Right>
            </Header>

            <Content>
                <CardPlace />
            </Content>

        </Container>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});