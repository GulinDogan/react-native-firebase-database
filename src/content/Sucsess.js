import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import sucessImage from '../../images/okey.png'

const Sucsess = () => {
    return (
        <View style = {styles.logoContainer}>
             <Image source = {sucessImage} style = {styles.sucessImage} />
             <Text style = {styles.logoText}>Mission completed</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logoContainer:{
        alignItems: 'center',
        paddingTop: 200
    },
     sucessImage:{
        width: 300,
        height: 250, 
    },
    logoText: {
        color:'black',
        fontSize: 30, 
        marginTop: 10,
        opacity:0.5    
    }
})

export default Sucsess;
