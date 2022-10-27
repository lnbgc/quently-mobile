import { ScrollView, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

export const Bookmarks = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginTop: 20 }}>

                <View style={styles.titleSection}>
                    <Text style={styles.title}>Bookmarks</Text>
                    <Text style={styles.subTitle}>/ˈbʊkmɑrks/</Text>
                </View>

                <View style={styles.emptySection}>
                    <Text style={styles.emptyTitle}>Nothing here.</Text>
                    <Text style={styles.emptyMessage}>Start saving words to add to your bookmarks!</Text>
                </View>

                <View style={{paddingBottom: 40}}>
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.word}>word</Text>
                            <Text style={styles.phonetic}>/word/</Text>
                        </View>
                        <Icon name="bookmark" size={30} color="#F8F8FA" />
                    </View>

                    <View style={styles.card}>
                        <View>
                            <Text style={styles.word}>word</Text>
                            <Text style={styles.phonetic}>/word/</Text>
                        </View>
                        <Icon name="bookmark" size={30} color="#F8F8FA" />
                    </View>


                    <View style={styles.card}>
                        <View>
                            <Text style={styles.word}>word</Text>
                            <Text style={styles.phonetic}>/word/</Text>
                        </View>
                        <Icon name="bookmark" size={30} color="#F8F8FA" />
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 30,
        backgroundColor: '#F8F8FA'
    },

    titleSection: {
        borderBottomWidth: 2,
        borderBottomColor: '#E6E7EB',
        borderStyle: 'dashed',
        paddingBottom: 20
    },

    title: {
        fontFamily: 'Roboto-Slab',
        fontSize: 20,
        color: '#2F3640',
    },

    subTitle: {
        fontFamily: 'Inter-Tight',
        fontSize: 14,
        color: 'rgba(47, 54, 64, 0.5)',
        marginTop: 5,
    },

    emptySection: {
        marginTop: 20,
        alignItems: 'center',
    },

    emptyTitle: {
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 16,
        color: '#F8F8FA',
        backgroundColor: '#006AE6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    emptyMessage: {
        fontFamily: 'Inter-Tight',
        fontSize: 14,
        color: 'rgba(47, 54, 64, 0.5)',
        paddingTop: 20,
        textAlign: 'center',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#006AE6',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },

    word: {
        color: '#F8F8FA',
        fontFamily: 'Roboto-Slab',
        fontSize: 16,
    },
    
    phonetic: {
        color: '#F8F8FA',
        fontFamily: 'Inter-Tight',
        fontSize: 14,
        marginTop: 5,
    },
})