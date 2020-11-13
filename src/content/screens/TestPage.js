import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Survey from './Survey'
import Voice from './Voice'
import Photo from './Photo'

const Tab = createBottomTabNavigator();

function TestPage() {
  return (
    <Tab.Navigator 
      initialRouteName="Survey"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}>
        <Tab.Screen name="Survey" 
          component={Survey} options={{
          tabBarLabel: 'Survey',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}  />
        <Tab.Screen name="Photo" component={Photo} 
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Voice" component={Voice}         
          options={{
          tabBarLabel: 'Voice Recorder',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-tie-voice" color={color} size={26} />
          ),
        }} 
        />
    </Tab.Navigator>
  );
}

export default TestPage;