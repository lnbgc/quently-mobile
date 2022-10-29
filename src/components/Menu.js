import React from 'react'

import { useNavigation } from '@react-navigation/native';

import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '../contexts/ThemeProvider';

const Menu = () => {

    const navigation = useNavigation();

    const { theme } = useTheme();


    return (
        <View>
            <TouchableOpacity rippleBorderless onPress={() => navigation.toggleDrawer()}>
                <View style={[styles.lineTop, {backgroundColor: theme.textColor}]} />
                <View style={[styles.lineMiddle, {backgroundColor: theme.textColor}]} />
                <View style={[styles.lineBottom, {backgroundColor: theme.textColor}]} />
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    lineMiddle: {
        height: 4,
        width: 25,
        borderRadius: 50,
        marginVertical: 7
    },
    lineTop: {
        height: 4, 
        width: 12,
        borderRadius: 50,
    },
    lineBottom: {
        height: 4, 
        width: 12,
        borderRadius: 50,
        alignSelf: 'flex-end'
    }
})