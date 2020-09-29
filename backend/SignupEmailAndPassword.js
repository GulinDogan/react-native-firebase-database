import React, { Component } from 'react'
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import { NavigationContext } from '@react-navigation/native';
class SignupEmailAndPassword extends Component {

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

   /* onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
        
    }

    */

    render() {   
        
        return (
            <View style={styles.container}>
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

export default SignupEmailAndPassword