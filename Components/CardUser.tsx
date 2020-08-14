import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
import { Container, Content, Header, Footer } from 'native-base';
import Icon from 'react-native-ionicons';
import { ScrollView } from 'react-native-gesture-handler';

import StarRating from './star-rating'

const { width, height } = Dimensions.get('window');

export default class CardCompnent extends Component {
    state = {
        activelike: false,
        postList: []
    }


    async componentDidMount() {
        try {
            const responsePosts = await fetch(`http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/posts`)
            console.log(responsePosts)
            const posts = await responsePosts.json()
            console.log(posts)
            this.setState({
                postList: posts.data
            })
        } catch (err) { console.log(err) }
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
            <View>
                {this.state.postList.map((post,index) => {
                    return (
                        <Card key={index}>
                            <View style={{ height: 80, flexDirection: 'row', paddingHorizontal: 12 }}>

                                <View style={{ flex: 1, paddingTop: 12 }}>
                                    <Image
                                        source={{ uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png' }}
                                        style={{ height: 40, width: 40, borderRadius: 100, }} />
                                </View>

                                <View style={{ flex: 6, paddingLeft: 10, justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ paddingRight: 10, fontWeight: 'bold', fontSize: 16 }}>{post.user_id}</Text>
                                        <View>
                                            < StarRating ratings={post.rating} size={15} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                        <Text >{post.place_id}</Text>
                                        <Text style={{ color: 'gray', paddingLeft: 5, fontSize: 12, paddingTop: 3 }}>서울대입구역</Text>
                                    </View>
                                </View>

                                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    {this.IsLike(this.state.activelike)}
                                    <Text style={{ fontSize: 15, paddingHorizontal: 5 }}>찜하기</Text>
                                </View>

                            </View>

                            <View style={{ width: width, height: width / 3, flexDirection: 'row' }}>
                                <ScrollView horizontal={true}>
                                    <Thumbnail
                                        source={{ uri: post.thumbnail }}
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

                                    </Left>


                                </View>
                                <Text>
                                    {post.comment}
                                </Text>
                            </CardItem>
                        </Card>)
                })}
            </View>
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