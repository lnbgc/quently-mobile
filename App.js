import * as React from 'react';

import { useFonts } from 'expo-font';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Text } from "react-native";

import { Home } from './screens/Home';
import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { Bookmarks } from './screens/Bookmarks';

import Menu from "./components/Menu";
import CustomDrawer from './components/CustomDrawer';

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
          drawerType: 'slide',
          drawerPosition: 'right',
          swipeEdgeWidth: 200,
          headerShown: true,

          drawerStyle: {
            backgroundColor: '#F8F8FA',
            width: '100%',
          },

          drawerLabelStyle: {
            fontFamily: 'Inter-Tight-Bold',
            fontSize: 18,
            textAlign: 'center',
            marginHorizontal: 0,
            padding: 0,
          },

          headerStyle: {
            height: 100,
            backgroundColor: '#F8F8FA',
            elevation: 0,
          },

          drawerActiveBackgroundColor: '#006AE6',
          drawerActiveTintColor: '#F8F8FA',
          drawerInactiveTintColor: '#2F3640',
          drawerInactiveBackgroundColor: '#E6E7EB',
          overlayColor: 'transparent',

          headerLeft: () => (
            <Text style={{
              fontFamily: 'Poppins',
              fontSize: 24,
              color: '#006AE6',
              paddingLeft: 30,
            }}>Q.</Text>
          ),

          headerRight: () => (
            <Menu/>
          ),

        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{ headerTitle: '' }} />
        <Drawer.Screen name="About" component={About} options={{ headerTitle: '' }} />
        <Drawer.Screen name="Contact" component={Contact} options={{ headerTitle: '' }} />
        <Drawer.Screen name="Bookmarks" component={Bookmarks} options={{ headerTitle: '' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}