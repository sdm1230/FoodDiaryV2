//upload photo screen 2
import React, { Component, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Alert,Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';


const {height,width}=Dimensions.get('window')

export default function Album ({navigation}) {
    const [resourcePath,setResourcePath]=useState("")
    
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
    },[setResourcePath])

        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:90,paddingHorizontal:16,paddingTop:40}}>
                    <Text style={{color:'#e38e8a',fontSize:20}}>S2</Text>
                    <Text>(1/5)</Text>
                    <Button title="다음" onPress={()=> navigation.navigate('UploadPlace')}/>
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
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image
                        source={{ uri: resourcePath }}
                        style={{ width: width, height: width}}
                    />
                </View>
                </ScrollView>
                
                <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}  >
                    <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    button: {
        width: 250,
        height: 60,
        backgroundColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 12
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    }
});