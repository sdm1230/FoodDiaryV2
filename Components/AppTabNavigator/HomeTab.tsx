import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';

import { Container, Content, Thumbnail, Header, Left, Right, Body} from 'native-base';
import CardUser from '../CardUser';

export default class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{ color: tintColor }} />
        ),
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Text style={{color: '#e38e8a',fontWeight:'bold', fontSize: 20,paddingHorizontal: 10,}}>S2</Text>
                    </Left>
                    <Body style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold',paddingLeft:18 }}>Food Diary</Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>

                <Content>
                    <CardUser/>
                </Content>

            </Container>
        );
    }
}

const style = StyleSheet.create({
    
});