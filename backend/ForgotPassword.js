import React, { Component } from 'react'
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import { NavigationContext } from '@react-navigation/native';

class ForgotPassword extends Component {

   // static contextType = NavigationContext;

    state={
        email:'',
        error:'',
        loading:false
    }
    
    onBottomPress = () =>{
        //navigation = this.context;
  
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(function (user) {
            alert('Please check your email...')
            }).catch(function (e) {
            console.log(e)
            })
    }

    render() {   
        
        return (
            <View style={styles.container}>
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

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
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
        fontSize:20,
        color:'red',
        alignSelf:'center',
        marginTop:15

    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:15,
        borderRadius:8,
        height:50,
        paddingLeft:10,
        fontSize:20

    },
    
  signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
});

export default ForgotPassword