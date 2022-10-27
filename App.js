import * as React from 'react';

import { useFonts } from 'expo-font';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './screens/Home';
import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { Bookmarks } from './screens/Bookmarks';
// import Header from './components/Header';
// import { View } from 'react-native';

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
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
          drawerType: 'front',
          drawerPosition: 'right',
          swipeEdgeWidth: 200
        }}>
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Drawer.Screen name="About" component={About} options={{headerShown:false}} />
        <Drawer.Screen name="Contact" component={Contact} options={{headerShown:false}} />
        <Drawer.Screen name="Bookmarks" component={Bookmarks} options={{headerShown:false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}