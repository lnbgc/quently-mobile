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

                <View style={{ alignSelf: 'flex-end', alignItems: 'center', flexDirection: 'row', marginRight: 30, marginTop:10 }}>
                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.toggleDrawer() }}>
                        <Icon name="close" size={35} color={theme.textColor} />
                    </TouchableOpacity>
                </View>

                <View>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Home') }}>
                        <Text style={[styles.navItem, { backgroundColor: theme.accentColor }]}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('About') }}>
                        <Text style={[styles.navItem, { backgroundColor: theme.accentColor }]}>About</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Contact') }}>
                        <Text style={[styles.navItem, { backgroundColor: theme.accentColor }]}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Bookmarks') }} style={[styles.bookmarkLink, {backgroundColor: theme.accentColor}]}>
                        <Text style={styles.bookmarkItem} >Bookmarks</Text>
                        <Icon name="bookmarks" size={25} color="#F8F8FA" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity rippleBorderless onPress={changeTheme} style={[styles.themeButton, { borderColor: theme.accentColor }]}>
                    <MaterialIcons name="invert-colors-on" size={30} color={theme.accentColor} />
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
        color: '#F8F8FA'
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
        color: '#F8F8FA',
    },
    themeButton: {
        padding: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: 'dashed'
    }
})