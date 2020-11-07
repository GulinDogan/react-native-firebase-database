import React, { Component } from 'react'
import {View, Button, StyleSheet} from 'react-native'
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
    render() {
        return (
           <View style = {styles.container}> 

                <Button
                title="Sign out"
                onPress={() => firebase.auth().signOut().then(this.setState.loggedIn = false)} 
                />

           </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50
    }
});