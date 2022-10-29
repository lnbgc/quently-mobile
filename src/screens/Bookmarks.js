import { ScrollView, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { useTheme } from "../contexts/ThemeProvider";

export const Bookmarks = () => {

    const { theme } = useTheme();

    return (
        <ScrollView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <View style={{ marginTop: 20 }}>

                <View style={[styles.titleSection, {borderColor: theme.secondaryColor}]}>
                    <Text style={[styles.title, {color: theme.textColor}]}>Bookmarks</Text>
                    <Text style={[styles.subTitle, {color: theme.transparentColor}]}>/ˈbʊkmɑrks/</Text>
                </View>

                <View style={styles.emptySection}>
                    <Text style={[styles.emptyTitle, {backgroundColor: theme.accentColor}]}>Nothing here.</Text>
                    <Text style={[styles.emptyMessage, {color: theme.transparentColor}]}>Start saving words to add to your bookmarks!</Text>
                </View>

                <View style={{paddingBottom: 40}}>
                    <View style={[styles.card, {backgroundColor: theme.accentColor}]}>
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
    },

    titleSection: {
        borderBottomWidth: 2,
        borderStyle: 'dashed',
        paddingBottom: 20
    },

    title: {
        fontFamily: 'Roboto-Slab',
        fontSize: 20,
    },

    subTitle: {
        fontFamily: 'Inter-Tight',
        fontSize: 14,
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    emptyMessage: {
        fontFamily: 'Inter-Tight',
        fontSize: 14,
        paddingTop: 20,
        textAlign: 'center',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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