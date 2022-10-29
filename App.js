import * as React from 'react';

import { useFonts } from 'expo-font';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar, Text } from "react-native";

import { Home } from './src/screens/Home';
import { About } from './src/screens/About';
import { Contact } from './src/screens/Contact';
import { Bookmarks } from './src/screens/Bookmarks';

import Menu from "./src/components/Menu";
import CustomDrawer from './src/components/CustomDrawer';

import ThemeProvider from './src/contexts/ThemeProvider';
import ThemeWrapper from './src/contexts/ThemeWrapper';
import Header from './src/components/Header';
import CustomStatusBar from './src/components/CustomStatusBar';

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
    <ThemeProvider>
      <ThemeWrapper>
        <CustomStatusBar/>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
              drawerType: 'slide',
              drawerPosition: 'right',
              swipeEdgeWidth: 200,
              header: Header,
              drawerStyle: {
                width: '100%',
              },
              overlayColor: 'transparent',
            }}
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={Home} options={{ headerTitle: '' }} />
            <Drawer.Screen name="About" component={About} options={{ headerTitle: '' }} />
            <Drawer.Screen name="Contact" component={Contact} options={{ headerTitle: '' }} />
            <Drawer.Screen name="Bookmarks" component={Bookmarks} options={{ headerTitle: '' }} />
          </Drawer.Navigator>
        </NavigationContainer>

      </ThemeWrapper>
    </ThemeProvider>
  );
}