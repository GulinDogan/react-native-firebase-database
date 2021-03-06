import React, { Component } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import Logo from './Logo';
import BG from '../../images/bg3.jpg'
import firebase from 'firebase'

class SignUpForm extends Component {
    
    static contextType = NavigationContext;

    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }
    
    onBottomPress = () =>{
        navigation = this.context;


        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => navigation.navigate('DrawerNav'))
            .catch(function(error) {
                alert(error)
            })
    }

    render(){
        const navigation = this.context;
        return (
            <ImageBackground style={styles.container} source= {BG} > 
                <View>
                    <Logo/>
                </View>
                <Text style = {styles.header}>Sign Up</Text>
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
                        <Text style={styles.buttonText}>Sing Up</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
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
        paddingLeft:10,
        fontSize:20

    }
});

export default SignUpForm;
