import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import Logo from './Logo';
import BG from '../../images/bg3.jpg';
import firebase from 'firebase'

class LoginForm extends Component {

    state={
        email:'',
        password:'',
        error:'',
        loading:false
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
        return (
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
					
					<TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Text style={styles.signupText} >Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.signupTextCont}>
					
					< TouchableOpacity onPress = {() =>  this.props.navigation.navigate('SignUpForm')} >
                        <Text style={styles.signupText} >Do not have an account yet? Signup</Text>
                    </TouchableOpacity>
			    </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150,
        padding:20
    },
    header: {
        fontSize:16,
        color:'white',
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
        marginTop:15,
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
        padding:15,
        borderRadius:8,
        height:50,
        paddingLeft:10,
        fontSize:20
    },
    forgotContainer : {
        left: 190,
        flexDirection:'row'
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
    }

});

export default LoginForm;
