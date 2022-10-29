import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useTheme } from "../contexts/ThemeProvider";
// import { Header } from "../components/Header"

export const About = () => {

    const { theme } = useTheme();

    return (

        <View>

            {/* <Header /> */}
            <ScrollView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
                {/* ABOUT SECTION */}
                <View style={{ marginTop: 20 }}>
                    <View style={[styles.titleSection, {borderColor: theme.secondaryColor}]}>
                        <Text style={[styles.title, {color: theme.textColor}]}>About</Text>
                        <Text style={[styles.subTitle, {color: theme.transparentColor}]}>/əˈbɛʊt/</Text>
                    </View>
                    <Text style={[styles.text, {color: theme.textColor}]}>QUENTLY is a mini-project created for my final web-development exam. A small tool to bring some joy to word lovers. Open-source and made with the heart.</Text>
                </View>

                {/* QUESTIONS SECTION */}
                <View style={styles.section}>
                    <View style={[styles.titleSection, {borderColor: theme.secondaryColor}]}>
                        <Text style={[styles.title, {color: theme.textColor}]}>Questions</Text>
                        <Text style={[styles.subTitle, {color: theme.transparentColor}]}>/ˈkwɛstʃənz/</Text>
                    </View>
                    {/* QUESTION */}
                    <View>
                        <Text style={[styles.question, {color: theme.accentColor}]}>Why can't I find the word I'm looking for?</Text>
                        <Text style={[styles.text, {color: theme.textColor}]}>QUENTLY relies on an external API to display data. Check if you've typed your search input correctly first, but the word might simply not be stocked into the database. We apologize for the incovenience.</Text>
                    </View>

                    {/* QUESTION */}
                    <View>
                        <Text style={[styles.question, {color: theme.accentColor}]}>My bookmarks have been deleted.</Text>
                        <Text style={[styles.text, {color: theme.textColor}]}>Bookmarks are stored in local storage and are therefore completely dependent on your personal machine and browser. If you wish to still have access to your bookmarks, make sure to not clear the cache of this application.</Text>
                    </View>

                    {/* QUESTION */}
                    <View style={{ paddingBottom: 40 }}>
                        <Text style={[styles.question, {color: theme.accentColor}]}>Will QUENTLY store my data?</Text>
                        <Text style={[styles.text, {color: theme.textColor}]}>No.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 30,
    },

    section: {
        marginTop: 40,
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

    text: {
        marginTop: 20,
        fontFamily: 'Inter-Tight',
        fontSize: 14,
    },

    question: {
        marginTop: 30,
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 16,
    },

})