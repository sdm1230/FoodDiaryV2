// upload photo screen 1

import React, {useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

export default function Camera({ navigation }) {

  const [resourcePath, setResourcePath] = useState("")

  useEffect(() => {
    cameraLaunch()
  }, [])

  // Launch Camera
  const cameraLaunch = useCallback(() => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (res) => {
      console.log('Response = ', res);
      setResourcePath(res.uri);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        const source = { uri: res.uri };
      }
    })
  }, [setResourcePath])

  return (

    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 90, paddingHorizontal: 16, paddingTop: 40 }}>
        <Text style={{ color: '#e38e8a', fontSize: 20 }}>S2</Text>
        <Button title="다음" onPress={() => navigation.push("UploadPlace", { imageUri: resourcePath })} />
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: resourcePath }}
          style={{ width: width, height: width }}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, marginTop: 250 }}>
          
        </View>

        <View style={{ flex: 2, height: width / 2, marginTop: width / 8 }}>
          <TouchableOpacity onPress={cameraLaunch}
            style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: 1000, borderColor: '#e38e8a' }}  >
            <Icon name="ios-add" style={{ color: '#e38e8a', fontSize: 50 }} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginTop: 250 }}>
         <Button title="앨범>>" color="skyblue" onPress={() => navigation.goBack()}></Button>
        </View>

      </View>

    </View>
  );
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