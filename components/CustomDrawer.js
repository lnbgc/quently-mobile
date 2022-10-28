import React from "react"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { View, Text } from "react-native"
import { Icon } from "react-native-vector-icons/Ionicons"

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, }}>

            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#F8F8FA', height: '100%', justifyContent: 'center' }}>

                {/*
                <DrawerItem label="Home" onPress={() => { props.navigation.navigate('Home') }} />
                <DrawerItem label="About" onPress={() => { props.navigation.navigate('About') }} />
                <DrawerItem label="Contact" onPress={() => { props.navigation.navigate('Contact') }} />
                <DrawerItem label="Bookmarks" onPress={() => { props.navigation.navigate('Bookmarks') }} />
                */}
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}
export default CustomDrawer