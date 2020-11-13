import React from 'react';
import {Image, StyleSheet}from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TestPage from '../content/screens/TestPage'
import Profile from '../content/screens/Profile'
import test from '../../images/test.png'
import user from '../../images/user.png'

import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
   
      <Drawer.Navigator initialRouteName = 'Profile'> 
        <Drawer.Screen name="Profile" component={Profile} 
        options={{
          title: 'Profile',
          drawerIcon: ({ focused, size }) => (
              <Image
                source={user}
                style={[focused ? color:'#7cc', { height: 40, width: 40 }]}
              />
           ) }}/>
        <Drawer.Screen name="Experience" component={TestPage}
                options={{
                  title: 'Experience',
                  drawerIcon: ({ focused, size }) => (
                      <Image
                        source={test}
                        style={[focused ? color:'#7cc', { height: 35, width: 35 }]}
                      />
                   ) }}
                    />
      </Drawer.Navigator>

  );
}


export default MyDrawer;