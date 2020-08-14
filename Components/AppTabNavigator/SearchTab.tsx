import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Container, Content, Header, Footer, Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPlace from '../CardPlace';
import {SearchBar} from 'react-native-elements'

const { width, height } = Dimensions.get('window')
const placeListUrl="http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/places"

export default class SearchTab extends Component {
    state = {
        text: "",
        placeList:[],
        postList:[],
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-search' style={{ color: tintColor }} />
        )
    }
    async componentDidMount() {
        try{
        const responsePlaces = await fetch(`http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/places`)
        console.log(responsePlaces)
        const places = await responsePlaces.json()
        console.log(places)
        this.setState({
            placeList: places.data,
        })

        const responsePosts = await fetch(`http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/posts`)
            console.log(responsePosts)
            const posts = await responsePosts.json()
            console.log(posts)
            this.setState({
                postList: posts.data
            })
        }catch(err){console.log(err)}
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left style={{ flexDirection: 'row',flex:1 }}>
                        <Text style={{ color: '#e38e8a', fontWeight: 'bold', fontSize: 20, paddingHorizontal: 10, }}>S2</Text>
                    </Left>
                    <Body style={{borderWidth:1,flex:6,height:30,justifyContent:'center'}}>
                        <TextInput
                            style={{width:"100%"}}
                            onChangeText={(text) => this.setState({ text })}
                            placeholder="장소 이름 검색">
                        </TextInput>
                    </Body>
                    <Right style={{flex:0}}></Right>
                </Header>

                <Content>
                    <View>
                        {this.state.placeList.filter(x => x.name.includes(this.state.text)
                        ).map((x,index) => {
                            return (<Text key={index}> {x.name} </Text>)
                        }
                        )
                        }
                    </View>
                </Content>

            </Container>
        );
    }
}