import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
export const Home = () => {


    return (
        <View style={styles.container}>

            {/* <Text style={styles.text}>Looking for something?</Text> */}

            <View style={styles.searchbar}>
                <TextInput style={styles.input} placeholder="Search..." selectionColor={'#5E9EFF'} />
                <Pressable style={styles.button}>
                    <Icon name="ios-search" size={25} color="#F8F8FA" />
                </Pressable>
            </View>

            <ScrollView style={{ width: '100%', marginTop:20 }}>
                <View style={styles.topWord}>
                    <View style={styles.wordTitle}>
                        <Icon name="volume-high" size={30} color="#006AE6" style={{ marginRight: 10 }} />
                        <Text style={styles.word}>word</Text>
                        <Icon name="bookmark-outline" size={30} color="#006AE6" style={{ marginLeft: 10 }} />
                    </View>
                    <Text style={styles.phonetic}>/word/</Text>
                </View>

                <View style={styles.content}>

                    <View style={styles.section}>
                        <Text style={styles.tab}>tab</Text>
                        <View>
                            <View>
                                <Text style={styles.tabListItem}>1. tab content</Text>
                                <Text style={styles.tabListItem2}>tab content</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.content}>

                    <View style={styles.section2}>
                        <Text style={styles.tab}>Synonyms</Text>
                        <View style={styles.tabContent}>
                            <Text style={styles.tabItem}>word</Text>
                        </View>
                    </View>

                    <View style={styles.section2}>
                        <Text style={styles.tab}>Antonyms</Text>
                        <View style={styles.tabContent}>
                            <Text style={styles.tabItem}>word</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F8F8FA',
        paddingHorizontal: 30,
        paddingTop: 10,
        alignItems: 'center',
        height: '100%'
    },
    title: {
        fontSize: 20,
    },
    text: {
        fontFamily: 'Inter-Tight',
        fontWeight: '600',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
    },
    searchbar: {
        // display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: "#E6E7EB",
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
        backgroundColor: "#006AE6",
        color: 'white',
        fontSize: 18,
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
        color: '#2F3640',
        fontFamily: 'Roboto-Slab',
        fontSize: 20
    },
    phonetic: {
        fontFamily: 'Inter-Tight',
        color: 'rgba(47, 54, 64, 0.5)',
        fontSize: 18
    },
    content: {
        borderTopWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#E6E7EB',
        paddingBottom: 20,
    },
    section: {
        paddingTop: 20,
    },
    tab: {
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 18,
        color: '#F8F8FA',
        backgroundColor: '#006AE6',
        alignSelf: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 40,
    },
    tabListItem: {
        fontFamily: 'Inter-Tight',
        color: '#2F3640',
        fontSize: 16,
        marginTop: 10,
    },
    tabListItem2: {
        fontFamily: 'Inter-Tight',
        color: '#006AE6',
        borderLeftWidth: 2,
        borderColor: '#006AE6',
        paddingLeft: 10,
        fontSize: 16,
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
        color: '#006AE6',
        fontSize: 16,
        marginTop: 10,
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#006AE6',
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    section2: {
        paddingTop: 20,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#E6E7EB',
        paddingBottom: 20,
    },
})