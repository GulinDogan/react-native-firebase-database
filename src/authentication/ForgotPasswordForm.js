import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import BG from '../../images/bg3.jpg'
import firebase from 'firebase'


class ForgotPasswordForm extends Component {
        state={
            email:'',
            error:'',
            loading:false
        }

onBottomPress = () =>{

    firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(function (user) {
        alert('Please check your email...')
        }).catch(err => {
            this.setState({
                error:err.message
            })
        })
    }

    render(){
        return (
            <ImageBackground style={styles.container} source= {BG} > 
            
                <View>
                    <Logo/>
                </View>
                <Text style = {styles.header}>New Password </Text>
                <View>
                <TextInput
                    placeholder="email" 
                    style={styles.input} 
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                />

                <TouchableOpacity style={styles.buttonContainer}  onPress={this.onBottomPress}>
                    <Text style={styles.buttonText}>Update Password</Text>
                </TouchableOpacity>

                </View>

                <Text style={styles.errorText} >
                    {this.state.error}
                </Text>

            
            
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        padding:20
    },
    header: {
        fontSize:16,
        alignSelf:'center',
        marginTop:5,
        marginBottom:5,
        fontWeight:'bold'
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        marginTop:10,
        borderRadius:5,
    },
    errorText:{
        fontSize:14,
        color:'red',
        alignSelf:'center',
        marginTop:15

    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:16
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:8,
        borderRadius:8,
        height:40
    },
    forgotContainer : {
        left: 190,
        flexDirection:'row'
    },
    signupText: {
        fontSize:16
    }, 
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:30,
        flexDirection:'row'
    }
})

export default ForgotPasswordForm;