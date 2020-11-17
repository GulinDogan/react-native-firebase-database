import React from 'react';
import {Image}from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TestPage from '../content/screens/TestPage'
import Profile from '../content/screens/Profile'
import Settings from '../content/screens/Settings'
import UserInfo from '../content/screens/UserInfo'

import test from '../../images/test.png'
import user from '../../images/user.png'
import adjustment from '../../images/settings.png'

import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
  
    <Drawer.Navigator initialRouteName = 'UserInfo'> 
        <Drawer.Screen name = "User Info" component = {UserInfo}/>
    
        <Drawer.Screen name="Profile" component={Profile} 
        options={{
          title: 'Profile',
          drawerIcon: ({ focused, size }) => (
              <Image
                source={user}
                style={[focused ? color:'#7cc', {marginTop:10, height: 62, width: 40 }]}
              />
           ) }}/>
      <Drawer.Screen name="Experience" component={TestPage}
          options={{
            title: 'Experience',
            drawerIcon: ({ focused, size }) => (
                <Image
                  source={test}
                  style={[focused ? color:'#7cc', {marginTop:5, height: 62, width: 62 }]}
                />
              ) }}
              />
      <Drawer.Screen name="Settings" component={Settings}
          options={{
            title: 'Settings',
            drawerIcon: ({ focused, size }) => (
                <Image
                  source={adjustment}
                  style={[focused ? color:'#7cc', {marginTop:5, height: 62, width: 60 }]}
                />
              ) }}
              />
      </Drawer.Navigator>

  );
}


export default MyDrawer;