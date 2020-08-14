import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import Icon from 'react-native-ionicons';

import { Container, Content, Thumbnail, Header, Left, Right, Body, Button, Item } from 'native-base';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import StarRating from '../star-rating'

import SearchableDropdown from 'react-native-searchable-dropdown';

const { width, height } = Dimensions.get('window')

export default class NewTab extends Component {

    state = {
        placeText: "",
        score: 0,
        comment: "",
        placeList: [],
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-add' style={{ color: tintColor }} />
        ),

    }

    async componentDidMount() {
        try {
            const responsePlaces = await fetch(`http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/places`)
            console.log(responsePlaces)
            const places = await responsePlaces.json()
            console.log(places)

            this.setState({
                placeList: places.data,
            })
        } catch (err) { console.log(err) }
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
                    <ScrollView horizontal={true} style={{ height: width }}>
                        <Image source={{
                            uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png'
                        }}
                            style={{ width: width, height: width }} />
                    </ScrollView>

                    <View style={{ height: (height - width) }}>
                        <View style={{ flex: 0.5, alignItems: 'center', paddingVertical: 10, }}>
                            <SearchableDropdown
                                onTextChange={text => this.state.placeText}
                                onItemSelect={item => JSON.stringify(this.state.placeList)}
                                containerStyle={{width:"80%",}}
                                textInputStyle={{
                                    height:30,
                                    borderWidth: 2,
                                    borderColor: '#e38e8a',
                                    borderRadius: 5,
                                    
                                }}
                                itemStyle={{
                                    padding: 10,
                                    marginTop: 2,
                                    backgroundColor: 'white',
                                    borderColor: '#bbb',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    
                                }}
                                itemTextStyle={{ color: '#e38e8a',}}
                                itemsContainerStyle={{ maxHeight: 140 }}
                                items={this.state.placeList}
                                defaultIndex={2}
                                resetValue={false}
                                
                                placeholder="place">
                            </SearchableDropdown>
                        </View>

                        <View style={{ flex: 2, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={{ position: 'absolute', alignItems: 'center'}}>
                                <StarRating ratings={this.state.score} size={50} gap={12} />
                            </View>
                            <Button onPress={() => { this.setState({ score: 1 }) }} style={{ flex: 1, height: "80%", opacity: 0, marginLeft: "10%" }} />
                            <Button onPress={() => { this.setState({ score: 2 }) }} style={{ flex: 1, height: "80%", opacity: 0 }}></Button>
                            <Button onPress={() => { this.setState({ score: 3 }) }} style={{ flex: 1, height: "80%", opacity: 0 }}></Button>
                            <Button onPress={() => { this.setState({ score: 4 }) }} style={{ flex: 1, height: "80%", opacity: 0 }}></Button>
                            <Button onPress={() => { this.setState({ score: 5 }) }} style={{ flex: 1, height: "80%", opacity: 0, marginRight: "10%" }}></Button>
                        </View>

                        <View style={{ flex: 8, backgroundColor: '#eee' }}>
                            <TextInput
                                onChangeText={(text) => this.setState({ comment: text })}
                                placeholder="comment 남기기">
                            </TextInput>
                        </View>
                    </View>

                </Content>

            </Container>
        );
    }
}