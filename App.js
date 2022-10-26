import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Bookmarks } from './components/Bookmarks';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}