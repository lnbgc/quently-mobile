import React from "react"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1}}>

            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#F8F8FA', height: '100%', justifyContent: 'space-between' }}>

                <View style={{ alignSelf: 'flex-end', alignItems: 'center', flexDirection: 'row', marginRight: 30, height: 65 }}>
                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.toggleDrawer() }}>
                        <Icon name="close" size={40} color="#2F3640" />
                    </TouchableOpacity>
                </View>

                <View>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Home') }}>
                        <Text style={styles.navItem}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('About') }}>
                        <Text style={styles.navItem}>About</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Contact') }}>
                        <Text style={styles.navItem}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity rippleBorderless onPress={() => { props.navigation.navigate('Bookmarks') }} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#E6E7EB',
                        paddingVertical: 10,
                        marginHorizontal: 30,
                        borderRadius: 50,
                    }}>
                        <Text style={{
                            fontFamily: 'Inter-Tight-Bold',
                            fontSize: 18,
                            color: '#006AE6',
                            paddingRight: 10,
                        }} >Bookmarks</Text>
                        <Icon name="bookmarks" size={25} color="#006AE6" />
                    </TouchableOpacity>
                </View>

                <View>
                    <Switch />
                </View>

                {/* <DrawerItemList {...props} /> */}
            </DrawerContentScrollView>
        </View>
    )
}
export default CustomDrawer

const styles = StyleSheet.create({
    navItem: {
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 18,
        color: '#006AE6',
        textAlign: 'center',
        backgroundColor: '#E6E7EB',
        marginBottom: 20,
        paddingVertical: 10,
        marginHorizontal: 30,
        borderRadius: 50,
    }
})