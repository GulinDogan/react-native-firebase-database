import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, ImageBackground, Button} from 'react-native';
//import BG from '../../images/bg15.jpg';
import Questions from './Questions';

class Survey extends Component {

    _handlePress=()=>{

        // Firrebase config code
    }

      render(){
        return (
            <ImageBackground style = {styles.container} >
                <Text style={styles.header}>Daily Survey </Text>
                <ScrollView>

                    <Questions/>

                    <TouchableOpacity style={ styles.buttonContainer }
                    styleDisabled={{color: 'red'}}
                    onPress={() => this._handlePress()}
                    title="Submit">
                        <Text style= {styles.buttonText}>
                        Submit
                    </Text>
                    </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor:'#add8e6'
    },
    header: {
        fontSize:20,
        color:'black',
        alignSelf:'center',
        marginTop:15,
        fontWeight:'bold'
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:10,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    
    }
});

export default Survey;