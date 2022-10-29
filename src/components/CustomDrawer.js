import React from "react"
import { DrawerContentScrollView } from "@react-navigation/drawer"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useTheme } from "../contexts/ThemeProvider"

const CustomDrawer = (props) => {

    const { theme, updateTheme } = useTheme();
    const changeTheme = () => updateTheme(theme.themeMode)

    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: theme.backgroundColor, height: '100%', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 40 }}>

                <View style={{ alignSelf: 'flex-end', alignItems: 'center', flexDirection: 'row', marginRight: 30, height: 65 }}>
                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.toggleDrawer() }}>
                        <Icon name="close" size={40} color={theme.textColor} />
                    </TouchableOpacity>
                </View>

                <View>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Home') }}>
                        <Text style={[styles.navItem, { backgroundColor: theme.secondaryColor }, { color: theme.textColor }]}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('About') }}>
                        <Text style={[styles.navItem, { backgroundColor: theme.secondaryColor }, { color: theme.textColor }]}>About</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Contact') }}>
                        <Text style={[styles.navItem, { backgroundColor: theme.secondaryColor }, { color: theme.textColor }]}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Bookmarks') }} style={[styles.bookmarkLink, {backgroundColor: theme.secondaryColor}]}>
                        <Text style={[styles.bookmarkItem, {color: theme.textColor}]} >Bookmarks</Text>
                        <Icon name="bookmarks" size={25} color={theme.textColor} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity rippleBorderless onPress={changeTheme} style={[styles.themeButton, { backgroundColor: theme.secondaryColor }]}>
                    <MaterialIcons name="invert-colors-on" size={35} color={theme.textColor} />
                </TouchableOpacity>

            </DrawerContentScrollView>
        </View>
    )
}
export default CustomDrawer

const styles = StyleSheet.create({
    navItem: {
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 50,
    },
    bookmarkLink: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 50,
    },
    bookmarkItem: {
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 16,
        paddingRight: 10,
    },
    themeButton: {
        padding: 10,
        borderRadius: 50,
    }
})