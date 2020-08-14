import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
import { Container, Content, Header, Footer } from 'native-base';
import Icon from 'react-native-ionicons';
import { ScrollView } from 'react-native-gesture-handler';

import Modal from 'react-native-simple-modal';

const { width, height } = Dimensions.get('window');

export default class CardCompnent extends Component {

    state = { 
        activeLike:false,
        open: false
    }

    IsLike(props: boolean) {
        if (props) {
            return <Icon name='ios-heart' style={{ color: "#e38e8a", fontSize: 18 }} />
        }
        else {
            return <Icon name='ios-star' style={{ color: "#e38e8a", fontSize: 18 }} />
        }
    }

    render() {
        return (
            <Card>
                <CardItem style={{ height: 50 }}>
                    <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>우리가 참김치</Text>
                        <Icon name='ios-star' style={{ paddingLeft: 8, fontSize: 18, color: '#e38e8a' }} />
                        <Text style={{ paddingHorizontal: 5, color: '#e38e8a' }}>5</Text>
                        <Text style={{ color: 'gray', fontSize: 12 }}> 서울대입구역</Text>
                    </Left>
                    <Body></Body>
                    <Right style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        {this.IsLike(this.state.activeLike)}
                        <Text style={{ fontSize: 15, paddingHorizontal: 5 }}>찜하기</Text>
                    </Right>
                </CardItem>

                <View style={{ width: width, height: width / 3, flexDirection: 'row' }}>
                    <ScrollView horizontal={true}>
                        <Thumbnail
                            source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                            style={{ height: width / 3, width: width / 3, }} />
                        <Thumbnail
                            source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                            style={{ height: width / 3, width: width / 3, }} />
                        <Thumbnail
                            source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                            style={{ height: width / 3, width: width / 3, }} />
                        <Thumbnail
                            source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                            style={{ height: width / 3, width: width / 3, }} />
                        <Thumbnail
                            source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                            style={{ height: width / 3, width: width / 3, }} />
                    </ScrollView>
                </View>

                <CardItem style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Left>
                            <Image
                                source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                                style={{ height: 30, width: 30, borderRadius: 100 }} />
                            <Text style={{ paddingHorizontal: 10, fontWeight: 'bold' }}>임은성</Text>
                            <Icon name='ios-star' style={{ fontSize: 15 }} />
                            <Icon name='ios-star' style={{ fontSize: 15 }} />
                            <Icon name='ios-star' style={{ fontSize: 15 }} />
                            <Icon name='ios-star' style={{ fontSize: 15 }} />
                            <Icon name='ios-star-outline' style={{ fontSize: 15 }} />
                            <Text style={{ color: 'gray', fontSize: 12 }}> 2020-07-09 </Text>
                        </Left>

                        <TouchableOpacity onPress={() => this.setState({ open: true })}>
                            <Right>
                                <Icon name="arrow-down"></Icon>
                            </Right>
                        </TouchableOpacity>

                    </View>
                    <Text>
                        동민아 여기 꼭 가봐라,,<Text style={{ color: '#e38e8a' }}>@sdm369</Text>
                    </Text>
                </CardItem>

                <Modal
                    open={this.state.open}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({ open: false })}
                    style={{ alignItems: 'center' }}>
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                                    style={{ height: 30, width: 30, borderRadius: 100 }} />
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold' }}>임은성</Text>
                                <Icon name='ios-star' style={{ fontSize: 15 }} />
                                <Icon name='ios-star' style={{ fontSize: 15 }} />
                                <Icon name='ios-star' style={{ fontSize: 15 }} />
                                <Icon name='ios-star' style={{ fontSize: 15 }} />
                                <Icon name='ios-star-outline' style={{ fontSize: 15 }} />
                                <Text style={{ color: 'gray', fontSize: 12 }}> 2020-07-09 </Text>
                            </View>
                            <Text style={{ paddingLeft: 40 }}>
                                동민아 여기 꼭 가봐라,,<Text style={{ color: '#e38e8a' }}>@sdm369</Text>
                            </Text>
                        </View>

                        <View style={{ height: 10, paddingVertical: 5 }}></View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                                    style={{ height: 30, width: 30, borderRadius: 100 }} />
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold' }}>손명균</Text>
                                <Icon name='ios-star' style={{ fontSize: 15 }} />
                                <Icon name='ios-star' style={{ fontSize: 15 }} />
                                <Icon name='ios-star' style={{ fontSize: 15 }} />
                                <Icon name='ios-star-outline' style={{ fontSize: 15 }} />
                                <Icon name='ios-star-outline' style={{ fontSize: 15 }} />
                                <Text style={{ color: 'gray', fontSize: 12 }}> 2020-08-02 </Text>
                            </View>
                            <Text style={{ paddingLeft: 40 }}>
                                계란말이 개꿀 맛 무조건 2-3인 1인분시켜놓기
                            </Text>
                        </View>

                    </View>
</Modal>
            </Card>
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