import React, { Component } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Logo from './Logo';
import BG from '../../images/bg3.jpg';
import EmailAndPassword from '../backend/LoginEmailAndPassword';

class LoginForm extends Component {
    static contextType = NavigationContext;

      render(){
        const navigation = this.context;
        return (
            <ImageBackground style = {styles.container} source = {BG}>
                
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>
                <View style={styles.emailAndPassword}>
                    <EmailAndPassword/>
                </View>    
                     
                <View style={styles.forgotContainer}>
					
					<TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.signupText} >Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.signupTextCont}>
					
					< TouchableOpacity onPress = {() =>  navigation.navigate('SignUpForm')} >
                        <Text style={styles.signupText} >Do not have an account yet? Signup</Text>
                    </TouchableOpacity>
			    </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent:'center',
        marginTop:200
    },
    emailAndPassword:{
        marginTop:20,
        marginBottom:100
    },
    errorText:{
        fontSize:20,
        color:'red',
        alignSelf:'center',
        marginTop:15
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:10,
        marginLeft:20,
        marginRight:20
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    }, 
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
        
    },    
    forgotContainer : {
        flexGrow: 1,
        left: 280,
        paddingVertical:45,
        flexDirection:'row'
        
    },

});

export default LoginForm;
