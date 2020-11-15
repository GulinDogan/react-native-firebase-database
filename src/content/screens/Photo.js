import React, { Component } from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage'
import { RNCamera } from 'react-native-camera';
import IconLib1 from "react-native-vector-icons/FontAwesome";

import firebase from 'firebase'

export default class Photo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      fileName: ''
    }
  }


  takePicture = async () => {
    if (this.camera) {
      try {
        const options = {    
            pauseAfterCapture: true, 
            quality: 0.9,
            base64: true,
            orientation: RNCamera.Constants.ORIENTATION_UP,

        };
      
        const data = await this.camera.takePictureAsync(options);

        var str = data.uri
        var name = str.substring(56, 92);

        this.setState({
          url : str,
          fileName : name
        })          
      } 
      catch (err) {
          console.log('err: ', err);
          
      }
    }
  };

  
    sharePicture = async () => {

      try {
          // Create the file metadata
          var metadata = {
          contentType: 'image'
          };
             
          console.log("fileName: " +this.state.fileName)
          // Create a root reference
          var storageRef = await firebase.storage().ref().child("Images/" +this.state.fileName)
      
          const response = await fetch(this.state.url);
          const blob = await response.blob();

          const task = storageRef.put(blob, metadata).then(() => this.props.navigation.navigate("Voice"))
        }   
      
      catch (err) {
          console.log('err: ', err);
      }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          type={RNCamera.Constants.Type.front}
          style={styles.preview}
        >

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.takePicture}>
            <IconLib1 name="camera-retro" color="#ccc" size={50} />
            </TouchableOpacity>
          </View>

          
          <View style={styles.shareContainer}>
            <TouchableOpacity onPress={this.sharePicture}>
            <IconLib1 name="share-alt" color="#ccc" size={30} />
            </TouchableOpacity>
          </View>

        </RNCamera>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttonContainer: {
    width:'100%',
    position: 'absolute',
    bottom:30,
    alignItems:'center'
  },
  shareContainer:{
    width:'100%',
    position: 'absolute',
    left:300,
    top:20
  }
  
});
