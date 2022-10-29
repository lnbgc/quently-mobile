import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../contexts/ThemeProvider';

import Menu from './Menu';

const Header = () => {

    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.logo, {color: theme.accentColor}]}>Q.</Text>
            <Menu />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        fontFamily: 'Poppins',
        fontSize: 24
    }
})