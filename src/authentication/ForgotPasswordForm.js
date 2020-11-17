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
            <ScrollView>
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
            </ScrollView>
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
        marginTop:15,
        marginBottom:15,
        fontWeight:'bold'
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    
    },
    errorText:{
        fontSize:16,
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
        padding:10,
        borderRadius:8,
        height:40,
     
    

    }
    
});

export default ForgotPasswordForm;