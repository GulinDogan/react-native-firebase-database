import React, { Component } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, TextInput} from 'react-native';
import Logo from './Logo';
import BG from '../../images/bg3.jpg';
import firebase from 'firebase'

class LoginForm extends Component {

    static contextType = NavigationContext;

    state={
        email:'',
        password:'',
        error:'',
        loading:false,
        demographic: false
    }


    onBottomPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:err.message
            })
        })

    
    }
    onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
    }

      render(){
        const navigation = this.context;
        return (
            <ScrollView>
            <ImageBackground style = {styles.container} source = {BG}>
                
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>
                <Text style = {styles.header}>Experience Sampling</Text>
                <View>
                    <TextInput
                        placeholder="email" 
                        style={styles.input} 
                        value={this.state.email}
                        onChangeText={email=> this.setState({email})}
                    />

                    <TextInput 
                        placeholder="password" 
                        style={styles.input}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        />

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.errorText} >
                            {this.state.error}
                    </Text>
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
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 220,
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
        paddingTop:60,
        justifyContent :'center',
        paddingVertical:30,
        flexDirection:'row'
    }

});

export default LoginForm;
