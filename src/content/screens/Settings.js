import React, { Component } from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import firebase from 'firebase'

export default class Settings extends Component {

    language = () =>{
        console.log(firebase.auth().languageCode); // null
        firebase.auth().languageCode = 'tr';
        console.log(firebase.auth().languageCode); // 'fr'
    }

    state = {
        name: '',
        password:'',
        loggedIn: null
      }

    newPassword = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(function (user) {
        alert('Please check your email...')
        }).catch(err => {
            this.setState({
                error:err.message
            })
        })
    }

    render() {
        return (
           <View style = {styles.container}> 
            <View>
            <TouchableOpacity style = {styles.ButtonContanier}
                onPress={() => firebase.auth().signOut().then(this.setState.loggedIn = false)} 
                ><Text style = {styles.ButtonText}>Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.ButtonContanier}
                onPress={() => this.newPassword()} >
                <Text style = {styles.ButtonText}>New Password</Text>
            </TouchableOpacity>

            </View>
           </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 100
    },
    ButtonText:{
        fontSize:16,
        textAlign: 'center'
    },
    ButtonContanier:{
        padding: 5,
        margin:10,
        backgroundColor:'#ccc',
        borderRadius: 10
        
    }
});