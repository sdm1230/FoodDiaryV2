import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { Container, Content, Thumbnail, Header, Left, Right, Body, Item } from 'native-base';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import StarRating from '../../star-rating'



const { width, height } = Dimensions.get('window')

export default function UploadComment({ route, navigation }) {
    const { imageUri } = route.params;
    const [score, setScore] = useState(0)
    const [comment, setComment] = useState("")

    return (
        <View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height: 90, paddingHorizontal: 16, paddingTop: 40 }}>
                <View>
                    <Button title="뒤로" onPress={() => navigation.goBack()} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', color: "#e38e8a" }}>S2</Text>
                </View>
                <View>
                    <Button title="완료" onPress={() => navigation.navigate("MyTab")} />
                </View>
            </View>


            <View>
                <ScrollView horizontal={true} style={{ height: width }}>
                    <Image source={{
                        uri: imageUri
                    }}
                        style={{ width: width, height: width }} />
                </ScrollView>

                <View style={{ height: (height - width) }}>

                    <View style={{ flex: 2, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ position: 'absolute', alignItems: 'center' }}>
                            <StarRating ratings={score} size={50} gap={12} />
                        </View>
                        <TouchableOpacity onPress={() => { setScore(1) }} style={{ flex: 1, height: "80%", opacity: 0, marginLeft: "10%" }} />
                        <TouchableOpacity onPress={() => { setScore(2) }} style={{ flex: 1, height: "80%", opacity: 0 }} />
                        <TouchableOpacity onPress={() => { setScore(3) }} style={{ flex: 1, height: "80%", opacity: 0 }} />
                        <TouchableOpacity onPress={() => { setScore(4) }} style={{ flex: 1, height: "80%", opacity: 0 }} />
                        <TouchableOpacity onPress={() => { setScore(5) }} style={{ flex: 1, height: "80%", opacity: 0, marginRight: "10%" }} />
                    </View>

                    <View style={{ flex: 8, backgroundColor: '#eee' }}>
                        <TextInput
                            onChangeText={(text) => setComment(text)}
                            placeholder="comment 남기기"
                            style={{
                                padding:30
                            }}>
                            
                        </TextInput>
                    </View>
                </View>

            </View>

        </View>
    );
}