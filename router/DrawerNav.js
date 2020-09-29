import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TestPage from '../content/screens/TestPage'
import Settings from '../content/screens/Settings'
import Profile from '../content/screens/Profile'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
   
      <Drawer.Navigator initialRouteName = 'Profile'> 
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="TestPage" component={TestPage} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>

  );
}
export default MyDrawer;