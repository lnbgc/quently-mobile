import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { useTheme } from "../contexts/ThemeProvider"

export const Home = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

            <Text style={[styles.welcomeText, { color: theme.textColor }]}>Looking for something?</Text>

            <View style={[styles.searchbar, { backgroundColor: theme.secondaryColor }]}>
                <TextInput style={styles.input} placeholder="Search..." selectionColor={'#5E9EFF'} />
                <TouchableOpacity rippleBorderless style={[styles.button, { backgroundColor: theme.accentColor }]}>
                    <Icon name="ios-search" size={25} color="#F8F8FA" />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ width: '100%', marginTop: 20 }}>
                <View style={styles.topWord}>
                    <View style={styles.wordTitle}>
                        <Icon name="volume-high" size={30} color={theme.accentColor} style={{ marginRight: 10 }} />
                        <Text style={[styles.word, { color: theme.textColor }]}>word</Text>
                        <Icon name="bookmark-outline" size={30} color={theme.accentColor} style={{ marginLeft: 10 }} />
                    </View>
                    <Text style={[styles.phonetic, { color: theme.transparentColor }]}>/word/</Text>
                </View>

                <View style={[styles.content, { borderColor: theme.secondaryColor }]}>

                    <View style={styles.section}>
                        <Text style={[styles.tab, { backgroundColor: theme.accentColor }]}>tab</Text>
                        <View>
                            <View>
                                <Text style={[styles.tabListItem, { color: theme.textColor }]}>1. tab content</Text>
                                <Text style={[styles.tabListItem2, { color: theme.accentColor }, { borderColor: theme.accentColor }]}>tab content</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={[styles.content, { borderColor: theme.secondaryColor }]}>

                    <View style={[styles.section2, { borderColor: theme.secondaryColor }]}>
                        <Text style={[styles.tab, { backgroundColor: theme.accentColor }]}>Synonyms</Text>
                        <View style={styles.tabContent}>
                            <Text style={[styles.tabItem, { borderColor: theme.accentColor }, { color: theme.accentColor }]}>word</Text>
                        </View>
                    </View>

                    <View style={[styles.section2, { borderColor: theme.secondaryColor }]}>
                        <Text style={[styles.tab, { backgroundColor: theme.accentColor }]}>Antonyms</Text>
                        <View style={styles.tabContent}>
                            <Text style={[styles.tabItem, { borderColor: theme.accentColor }, { color: theme.accentColor }]}>word</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 30,
        alignItems: 'center',
        height: '100%'
    },
    welcomeText: {
        marginBottom: 20,
        fontFamily: 'Inter-Tight',
        fontSize: 16,
    },
    searchbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 100,
    },
    input: {
        width: '70%',
        fontSize: 16,
        paddingLeft: 20,
    },
    button: {
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    topWord: {
        alignSelf: 'flex-start',
        width: '100%',
        paddingBottom: 20
    },
    wordTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    word: {
        fontFamily: 'Roboto-Slab',
        fontSize: 20
    },
    phonetic: {
        fontFamily: 'Inter-Tight',
        fontSize: 16
    },
    content: {
        borderTopWidth: 2,
        borderStyle: 'dashed',
        paddingBottom: 20,
    },
    section: {
        paddingTop: 20,
    },
    tab: {
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 16,
        color: '#F8F8FA',
        alignSelf: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 40,
    },
    tabListItem: {
        fontFamily: 'Inter-Tight',
        fontSize: 14,
        marginTop: 10,
    },
    tabListItem2: {
        fontFamily: 'Inter-Tight',
        borderLeftWidth: 2,
        paddingLeft: 10,
        fontSize: 14,
        marginTop: 10,
        marginLeft: 15,
    },
    tabContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    tabItem: {
        fontFamily: 'Roboto-Slab',
        fontSize: 14,
        marginTop: 10,
        marginRight: 15,
        borderWidth: 2,
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    section2: {
        paddingTop: 20,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
        paddingBottom: 20,
    },
})