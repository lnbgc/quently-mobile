import { ScrollView, StyleSheet, Text, View } from "react-native"

export const About = () => {

    return (
        <ScrollView style={styles.container}>
            {/* ABOUT SECTION */}
            <View style={{marginTop: 20}}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>About</Text>
                    <Text style={styles.subTitle}>/əˈbɛʊt/</Text>
                </View>
                <Text style={styles.text}>QUENTLY is a mini-project created for my final web-development exam. A small tool to bring some joy to word lovers. Open-source and made with the heart.</Text>
            </View>

            {/* QUESTIONS SECTION */}
            <View style={styles.section}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Questions</Text>
                    <Text style={styles.subTitle}>/ˈkwɛstʃənz/</Text>
                </View>
                {/* QUESTION */}
                <View>
                    <Text style={styles.question}>Why can't I find the word I'm looking for?</Text>
                    <Text style={styles.text}>QUENTLY relies on an external API to display data. Check if you've typed your search input correctly first, but the word might simply not be stocked into the database. We apologize for the incovenience.</Text>
                </View>

                {/* QUESTION */}
                <View>
                    <Text style={styles.question}>My bookmarks have been deleted.</Text>
                    <Text style={styles.text}>Bookmarks are stored in local storage and are therefore completely dependent on your personal machine and browser. If you wish to still have access to your bookmarks, make sure to not clear the cache of this application.</Text>
                </View>

                {/* QUESTION */}
                <View style={{paddingBottom: 40}}>
                    <Text style={styles.question}>Will QUENTLY store my data?</Text>
                    <Text style={styles.text}>No.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 30
        // paddingBottom: 30,
    },

    section: {
        marginTop: 40,
    },

    titleSection: {
        borderBottomWidth: 2,
        borderBottomColor: '#E6E7EB',
        borderStyle: 'dashed',
        paddingBottom: 20
    },

    title: {
        fontFamily: 'Roboto-Slab',
        fontSize: 24,
        color: '#2F3640',
    },

    subTitle: {
        fontFamily: 'Inter-Tight',
        fontSize: 16,
        color: 'rgba(47, 54, 64, 0.5)',
        marginTop: 5,
    },

    text: {
        marginTop: 20,
        fontFamily: 'Inter-Tight',
        fontSize: 16,
        color: '#2F3640',
    },

    question: {
        marginTop: 30,
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#006AE6',
    },

})