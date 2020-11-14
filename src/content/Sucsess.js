import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import sucessImage from '../../images/okey.png'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Sucsess extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            password:'',
            loggedIn: null,
          }
    }

    render() {
        return (
          <View>
            <TouchableOpacity style = {styles.QuestionContainer}
            onPress = { () => firebase.auth().signOut().then(this.setState.loggedIn = false)}>
                <Text style = {styles.QuestionText}>Are you sure you want to finish ? </Text>
            </TouchableOpacity>
            <View style = {styles.logoContainer}>
                <Image source = {sucessImage} style = {styles.sucessImage} />

            </View> 
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    logoContainer:{
        alignItems: 'center',
        paddingTop: 100
    },
     sucessImage:{
        width: 300,
        height: 250, 
    },
    QuestionText:{
        color:'white',
        fontSize: 18,
        textAlign: 'center',
    },
    QuestionContainer:{
        backgroundColor: '#3B3B98',
        marginTop:100,
        marginLeft: 20,
        marginRight: 20,
        padding:20,
        borderRadius: 30,
      
    }
})

export default Sucsess;
