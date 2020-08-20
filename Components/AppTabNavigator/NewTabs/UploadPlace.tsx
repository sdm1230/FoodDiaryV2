import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import axios from 'axios';

import SearchableDropdown from 'react-native-searchable-dropdown';

export default function UploadPlace({ navigation,route }) {
    const { imageUri } = route.params
    const [placeText, setPlaceText] = useState("")
    const [placeList, setPlaceList] = useState([{name:"우리가참김치"},{name:"우리가 참순대"},{name: "나주곰탕"}])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const responsePlaces =
                    await axios(
                        `http://ec2-13-209-77-96.ap-northeast-2.compute.amazonaws.com/api/places`)
                console.log(responsePlaces)
                setPlaceList(responsePlaces.data)
            }
            fetchData();
        } catch (err) { console.log(err) }
    })

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 90, paddingHorizontal: 16, paddingTop: 40 }}>
                <Button title="뒤로" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', color: "#e38e8a" }}>S2</Text>
                <Button title="다음" onPress={() => navigation.navigate("UploadComment",{imageUri:imageUri})} />
            </View>
            
            <View style={{ flex: 0.5, zIndex: 1, alignItems: 'center' }}>
                <SearchableDropdown
                    onTextChange={text => setPlaceText(text)}
                    onItemSelect={item => JSON.stringify(placeList)}
                    containerStyle={{ position: 'absolute', width: "80%", }}
                    textInputStyle={{
                        height: 30,
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
                    itemTextStyle={{ color: '#e38e8a', }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={placeList}
                    defaultIndex={2}
                    resetValue={false}

                    placeholder="place">
                </SearchableDropdown>
            </View>
        </View>
    )
}