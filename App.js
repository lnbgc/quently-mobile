import * as React from 'react';

import { useFonts } from 'expo-font';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Bookmarks } from './components/Bookmarks';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Slab': require('./assets/fonts/RobotoSlab-Medium.ttf'),
    'Inter-Tight-Bold': require('./assets/fonts/InterTight-Bold.ttf'),
    'Inter-Tight': require('./assets/fonts/InterTight-Regular.ttf'),
    'Poppins': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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