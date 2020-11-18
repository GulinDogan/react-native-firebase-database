import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid} from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'firebase'

export default class Voice extends Component {

  static contextType = NavigationContext;

    constructor(props) {
            super(props);
            this.audioRecorderPlayer = new AudioRecorderPlayer();
          
            this.state = {
                url: '',
                isLoggingIn: false,
                recordSecs: 0,
                recordTime: '00:00:00',
                loggedIn: false
            }   
        };

        
        onStartRecord = async () => {
            if (Platform.OS === 'android') {
                try {
                  const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                      title: 'Permissions for write access',
                      message: 'Give permission to your storage to write a file',
                      buttonPositive: 'ok',
                    },
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the storage');
                  } else {
                    console.log('permission denied');
                    return;
                  }
                } catch (err) {
                  console.warn(err);
                  return;
                }
              }
              if (Platform.OS === 'android') {
                try {
                  const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    {
                      title: 'Permissions for write access',
                      message: 'Give permission to your storage to write a file',
                      buttonPositive: 'ok',
                    },
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the camera');
                  } else {
                    console.log('permission denied');
                    return;
                  }
                } catch (err) {
                  console.warn(err);
                  return;
                }
              }

            const result = await this.audioRecorderPlayer.startRecorder();
            this.audioRecorderPlayer.addRecordBackListener((e) => {
              this.setState({
                url: result,
                recordSecs: e.current_position,
                recordTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
              });
              return;
            });
            console.log("result: "+result);
     
          }
          
          onStopRecord = async () => {
            const result = await this.audioRecorderPlayer.stopRecorder();
            this.setState({
                recordSecs: 0,
            });
            console.log("result: "+result);
     
          }
                

            shareRecord = async () => {
                try{
                  const navigation = this.context;
                    var str = this.state.url
                    var name = str.substring(15, 24);
                    // Create the file metadata
                    var metadata = {
                        contentType: 'audio/mp4' 
                    };
                    console.log("Str: "+str)
                    console.log("Name: "+name)
           
                    // Create a root reference
                    var storageRef = await firebase.storage().ref().child("Voice/" +name)

                    console.log(this.state.url)
                    const response = await fetch(this.state.url);
                    const blob = await response.blob();
                    const task = storageRef.put(blob, metadata)
                    .then(() => navigation.navigate('SucsessPage'))

                }
                catch(err){
                    console.log(err)
                }                
        }
    
        

    render() {
      
        return (

            <View style={styles.container}>
                
                <TouchableOpacity style= {styles.share} onPress = {() => this.shareRecord()}>
                    <Icon name="share-alt" color="#ccc" size={30} />
                </TouchableOpacity>

                <View style={styles.QuestionContainer}>

                    <Text style={styles.QuestionText}>Şuan Nasıl hissediyorsunuz?</Text>
                    <Text style={styles.time}>{this.state.recordTime} </Text>
                </View>

                <View style = {styles.audioContainer}>
                
                    <TouchableOpacity style= {styles.play} onPress = {() => this.onStartRecord()}>
                        <Icon name="play" color="#ccc" size={40} />
                    </TouchableOpacity>

                    <TouchableOpacity style= {styles.stop} onPress = {() => this.onStopRecord()}>
                        <Icon name="stop" color="#ccc" size={40} />
                    </TouchableOpacity>

                
                </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 14
      
    },
    QuestionContainer:{
        marginTop:100,
        paddingTop: 50,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#ccc'
    },
    QuestionText:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    audioContainer: {
        marginTop: 150,
        flexDirection: 'row',
        paddingHorizontal:70
    },
    play:{
       marginHorizontal:30,
       
    },
    stop:{
        marginHorizontal:30
    },
    time:{
        padding:50
    },
    share:{
        alignItems:'flex-start',
        marginLeft: 270,
        marginTop:20
    }
  });