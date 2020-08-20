//upload photo screen 2
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Alert, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';

import UploadPlace from '../UploadPlace';


const { height, width } = Dimensions.get('window')

export default function Album({ navigation }) {
    const [resourcePath, setResourcePath] = useState("")

    useEffect(() => {
        imageGalleryLaunch()
    }, [])

    const imageGalleryLaunch = useCallback(() => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (res) => {
            console.log('Response = ', res);
            setResourcePath(res.uri);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else {
                const source = { uri: res.uri };
                /* 얘는 뭘까 갑자기 file이 왜나와
                console.log('response', JSON.stringify(res));
                
                this.setState({
                    filePath: res,
                    fileData: res.data,
                    fileUri: res.uri
                });*/
            }
        });
    }, [])

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 90, paddingHorizontal: 16, paddingTop: 40 }}>
                <Text style={{ color: '#e38e8a', fontSize: 20 }}>S2</Text>
                <Text>(1/5)</Text>
                <Button title="다음" onPress={() => navigation.push("UploadPlace", { imageUri: resourcePath })} />
            </View>

            {/* 얘는 뭘까
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,' + resourcePath,
                    }}
                    style={{ width: 100, height: 100 }}
                />
                */}
            <ScrollView horizontal={true}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={{ uri: resourcePath }}
                        style={{ width: width, height: width }}
                    />
                </View>
            </ScrollView>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, marginTop:250 }}>
                    <Button title="<<카메라" color="skyblue" onPress={() => navigation.push('Camera')}></Button>
                </View>

                <View style={{ flex: 2, height: width / 2, marginTop: width / 8 }}>
                    <TouchableOpacity onPress={imageGalleryLaunch}
                        style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: 1000, borderColor: '#e38e8a' }}  >
                        <Icon name="ios-add" style={{ color: '#e38e8a', fontSize: 50 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1,marginTop:250 }}>
                    <Button title="동영상>>" color="skyblue" onPress={() => navigation.push('Video')}></Button>
                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

});