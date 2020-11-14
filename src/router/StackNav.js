import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirebaseConfig from './FirebaseConfig';
import LoginForm from '../authentication/LoginForm';
import SignUpForm from '../authentication/SignUpForm';
import ForgotPassword from '../authentication/ForgotPasswordForm';
import Settings from '../content/screens/Settings'
import SucsessPage from '../content/Sucsess'
import DrawerNav from './DrawerNav';
import TestPage from '../content/screens/TestPage'

const Stack = createStackNavigator();

function Start () {
  
    return (
      <NavigationContainer onStateChange={state => console.log('New state is', state)} >
         <Stack.Navigator initialRouteName="FirebaseConfig" headerMode="none" >
         <Stack.Screen name="Experience Sampling Authentication" component={FirebaseConfig} />
          <Stack.Screen name="DrawerNav" component={DrawerNav}/>
          <Stack.Screen name = "TestPage" component = {TestPage} />
          <Stack.Screen name = "Settings" component = {Settings}/> 
          <Stack.Screen name = " LoginForm" component = {LoginForm}/>
          <Stack.Screen name = "SignUpForm" component = {SignUpForm}/>
          <Stack.Screen name = "ForgotPassword" component = {ForgotPassword}/> 
          <Stack.Screen name = "SucsessPage" component = {SucsessPage}/> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default Start;