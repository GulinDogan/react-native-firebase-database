import React, { Component } from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import firebase from 'firebase'
import ForgotPasswordForm from '../../authentication/ForgotPasswordForm'

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
           <View style = {styles.container}> 
            <View>
            <TouchableOpacity style = {styles.ButtonContanier}
                onPress={() => firebase.auth().signOut().then(this.setState.loggedIn = false)} 
                ><Text style = {styles.ButtonText}>Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.ButtonContanier}
                onPress={() => this.props.navigation.navigate("ForgotPasswordForm")}>
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