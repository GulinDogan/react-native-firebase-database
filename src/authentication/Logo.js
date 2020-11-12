import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import log from '../../images/rate.png'

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
      width: 220,
      height: 80
    },
    logoText: {
        color:'white',
        fontSize: 10, 
        marginTop: 10,
        opacity:0.5    
    }
})

export default Logo;