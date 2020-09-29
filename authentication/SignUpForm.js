import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Logo from './Logo';
import BG from '../images/bg3.jpg'
import SingupEmailAndPassword from '../backend/SignupEmailAndPassword';

class SignUpForm extends Component {
    render(){
        return (
            <ImageBackground style={styles.container} source= {BG} > 
                <View>
                    <Logo/>
                </View>
                <View>
                    <SingupEmailAndPassword/>
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

    logoContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    emailAndPassword:{
        flex:2
    }
});

export default SignUpForm;
