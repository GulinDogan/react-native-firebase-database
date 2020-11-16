import React, { Component } from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import firebase from 'firebase'
import lock from '../../../images/lock3.png'
import signOut from '../../../images/door.jpg'
import BG from '../../../images/bg5.jpg'

export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password:'',
            loggedIn: null
        };
        }

    language = () =>{
        console.log(firebase.auth().languageCode); 
        firebase.auth().languageCode = 'tr';
        console.log(firebase.auth().languageCode); 
    }

    render() {
        return (
            <ImageBackground source = {BG} style = {styles.container}> 
        
            <View>
            <TouchableOpacity style = {styles.ButtonContanier}
                onPress={() => firebase.auth().signOut().then(this.setState.loggedIn = false)}>
                <Image style = {styles.icon1} source = {signOut}/>
            <Text style = {styles.ButtonText}>Sign Out</Text>
            </TouchableOpacity>
               
            <TouchableOpacity style = {styles.ButtonContanier}
                onPress={() => this.props.navigation.navigate("ForgotPasswordForm")}>
                     <Image style = {styles.icon2} source = {lock}/>
                <Text style = {styles.ButtonText}>New Password</Text>
            </TouchableOpacity>

           </View>
           </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ButtonText:{
        fontSize:16,
        textAlign: 'center',
        margin:5
    },
    ButtonContanier:{
        margin:10,
        alignItems: 'center',
        marginTop:100
    },
    icon1:{
        height: 100,
        width: 100,
    },
    icon2:{
        height: 100,
        width: 100
    }
});