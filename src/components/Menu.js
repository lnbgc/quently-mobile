import React from 'react'

import { useNavigation } from '@react-navigation/native';

import { View, TouchableOpacity } from 'react-native'

const Menu = () => {

    const navigation = useNavigation();

    return (
        <View style={{ paddingRight: 30 }}>
            <TouchableOpacity rippleBorderless onPress={() => navigation.toggleDrawer()}>
                <View style={{ height: 4, backgroundColor: '#2F3640', width: 12, borderRadius: 10, }} />
                <View style={{ height: 4, backgroundColor: '#2F3640', width: 25, borderRadius: 10, marginVertical: 7 }} />
                <View style={{ height: 4, backgroundColor: '#2F3640', width: 12, borderRadius: 10, alignSelf: 'flex-end' }} />
            </TouchableOpacity>
        </View>
    )
}

export default Menu