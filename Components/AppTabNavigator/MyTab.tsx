import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Content, Thumbnail, Header, Left, Right, Body, Button } from 'native-base';

const { width, height } = Dimensions.get('window');

export default class MyTab extends Component {
    state = {
        userId: 3,
        activeIndex: 0,
        userProfileUri: " ",
        userProfileText: {},
        userPosts: [],
    }

    async componentDidMount() {
        try{
        const responsePicture = await fetch(`http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/users/${this.state.userId}/picture`)
        console.log(responsePicture)
        const userPicture = await responsePicture.json()
        console.log(userPicture)
        const responseProfile = await fetch(`http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/users/${this.state.userId}/profile`)
        console.log(responseProfile)
        const userProfile = await responseProfile.json()
        console.log(userProfile)
        const responsePostsUri = await fetch(`http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/users/${this.state.userId}/posts`)
        console.log(responsePostsUri)
        const userPostsUri = await responsePostsUri.json()
        console.log(userPostsUri)
        this.setState({
            userProfileUri: userPicture.data.signedRequest,
            userProfileText: userProfile.data,
            userPosts: userPostsUri.data,
        })
        } catch(err){console.log(err)}  
    }

    senmentClicked = (activeIndex) => {
        this.setState({
            activeIndex
        });
    }
    renderSection = () => {
        if (this.state.activeIndex === 0) {
            return (
                <View>
                    {this.renderSectionOne()}
                </View>
            )
        }
        if (this.state.activeIndex === 1) {
            return (
                <View>
                    {this.renderSectionTwo()}
                </View>
            )
        }
    }

    renderSectionOne = () => {
        return (
            <View style={{ flexDirection: 'row', borderColor: '#eee', borderTopWidth: 2, flexWrap: 'wrap' }}>
                {this.state.userPosts.map((post, index) => {
                    return (
                        <View key={index} style={{ width: width / 3, height: width / 3 }}>
                            <Image source={{
                                uri: post.thumbnail
                            }}
                                style={{ flex: 1 }} />
                        </View>)
                })}
            </View>
        )
    }
    renderSectionTwo = () => {
        return (
            <View style={{ flexDirection: 'row', borderColor: '#eee', borderTopWidth: 2, flexWrap: 'wrap' }}>
                <View style={{ width: width / 3, height: width / 3 }}>
                    <Image source={{
                        uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png'
                    }}
                        style={{ flex: 1 }} />
                </View>

                <View style={{ width: width / 3, height: width / 3 }}>
                    <Image source={{
                        uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png'
                    }}
                        style={{ flex: 1 }} />
                </View>

                <View style={{ width: width / 3, height: width / 3 }}>
                    <Image source={{
                        uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png'
                    }}
                        style={{ flex: 1 }} />
                </View>

                <View style={{ width: width / 3, height: width / 3 }}>
                    <Image source={{
                        uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png'
                    }}
                        style={{ flex: 1 }} />
                </View>

                <View style={{ width: width / 3, height: width / 3 }}>
                    <Image source={{
                        uri: 'https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png'
                    }}
                        style={{ flex: 1 }} />
                </View>
            </View>
        )
    }


    render() {
        return (

            <Container>
                <Header>
                    <Left>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e38e8a', paddingLeft: 10 }}>S2</Text>
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.state.userProfileText.username}</Text>
                    </Body>
                    <Right>
                        <Icon name='ios-settings-outline' style={{ paddingRight: 10, color: 'gray',fontSize:20 }} />
                    </Right>
                </Header>

                <Content>
                    <View style={{ flexDirection: 'row', flex: 1, height: 150 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Thumbnail source={{
                                uri: this.state.userProfileUri
                            }}
                                style={{
                                    width: 75, height: 75, borderRadius: 100, marginVertical: 10
                                }} />
                            <Text style={{ fontWeight: 'bold', marginBottom: 4, fontSize: 16 }}>{this.state.userProfileText.username}</Text>
                            <Text style={{ color: '#e38e8a', fontWeight: 'bold' }}>{this.state.userProfileText.description}</Text>
                        </View>

                        <View style={{ flex: 3 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, height: 150, paddingBottom: 20 }}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20 }}>{this.state.userProfileText.numPosts}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#e38e8a' }}>먹었어요</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, }}>{this.state.userProfileText.avgRating}</Text>
                                    <Icon name="ios-star" style={{ fontSize: 16, fontWeight: 'bold', color: '#e38e8a' }} />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20 }}>{this.state.userProfileText.numLikes}</Text>
                                    <Text style={{ fontSize: 18, color: '#e38e8a', fontWeight: 'bold' }}>찜</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{ flex: 3 }}>
                        <View style={{ flex: 1, flexDirection: 'row', borderColor: '#eee', borderTopWidth: 2, justifyContent: 'space-around' }}>
                            <Button transparent
                                style={{ backgroundColor: 'white' }}
                                onPress={() => this.senmentClicked(0)}
                                active={this.state.activeIndex === 0}>
                                <Icon name='ios-apps' style={[this.state.activeIndex === 0 ? { color: '#e38e8a',fontSize:28 } : { color: 'grey',fontSize:28 }]} />
                            </Button>
                            <Button transparent
                                style={{ backgroundColor: 'white' }}
                                onPress={() => this.senmentClicked(1)}
                                active={this.state.activeIndex === 1}>
                                <Icon name='ios-heart' style={[this.state.activeIndex === 1 ? { color: '#e38e8a',fontSize:28 } : { color: 'grey',fontSize:28 }]} />
                            </Button>
                        </View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});