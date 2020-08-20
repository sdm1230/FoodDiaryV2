// upload photo screen 1

import React, { Component, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'


export default function Video() {

  const [resourcePath, setResourcePath] = useState("")

  // Launch Camera
  const cameraLaunch = useCallback(() => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediatype:"video"
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

    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + resourcePath,
          }}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={{ uri: resourcePath }}
          style={{ width: 200, height: 200 }}
        />

        <TouchableOpacity onPress={cameraLaunch} style={styles.button}  >
          <Text style={styles.buttonText}>Launch Video Directly</Text>
        </TouchableOpacity>
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