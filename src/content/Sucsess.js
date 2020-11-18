import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import sucessImage from '../../images/okey.png'
import firebase from 'firebase'

class Sucsess extends Component {

    static contextType = NavigationContext;

    constructor(props){
        super(props)
        this.state = {
            name: '',
            password:'',
            loggedIn: ""
          }
    }

    setTimePassed = ()  =>{
            firebase.auth().signOut().then(this.setState.loggedIn = false) 
    }

    render() {
        const navigation = this.context;
        this.setTimePassed()
        return (

            <View>

                <View style = {styles.logoContainer}>
                    <Image source = {sucessImage} style = {styles.sucessImage} />
                </View> 
                
                <View style = {styles.textontainer}>
                    <Text style = {styles.txt}>Mission Complited</Text>
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
        paddingTop: 200,
    },
     sucessImage:{
        width: 300,
        height: 250, 
    },
    txt:{ 
        fontSize: 18,
        textAlign: 'center',
    },
    textontainer:{
        paddingTop:50
    }
})

export default Sucsess;
