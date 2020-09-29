import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Logo from './Logo';
import BG from '../images/bg3.jpg'
import NewPassword from '../backend/ForgotPassword';

class ForgotPasswordForm extends Component {

  
    render(){
        return (
            <ImageBackground style={styles.container} source= {BG} > 
                <View>
                    <Logo/>
                </View>
                <Text style = {styles.header}>New Password </Text>
                <View>
                    <NewPassword/>
                </View>

            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200
    },
    header: {
        fontSize:20,
        color:'white',
        alignSelf:'center',
        marginTop:15,
        fontWeight:'bold'
    }
});

export default ForgotPasswordForm;