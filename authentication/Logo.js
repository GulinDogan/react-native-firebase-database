import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import log from '../images/rate.png'

const Logo = () => {
    return (
        <View style = {styles.logoContainer}>
             <Image source = {log} style = {styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
   logoContainer: {
    alignItems: 'center',
  },
    logo:{
      width: 200,
      height: 100
    },
    logoText: {
        color:'white',
        fontSize: 20, 
        marginTop: 10,
        opacity:0.5    
    }
})

export default Logo;