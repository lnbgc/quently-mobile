import { Linking, ScrollView, StyleSheet, Text, View } from "react-native"

export const Contact = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Contact</Text>
                    <Text style={styles.subTitle}>/ˈkɒntækt/</Text>
                </View>
                <Text style={styles.text}>For any inquiries, contact me at <Text onPress={() => Linking.openURL('mailto:support@example.com')} style={styles.link}>lena.bageac@epitech.eu</Text>!</Text>
                <Text style={styles.text}>
                    You can also check out my other projects on my <Text onPress={() => Linking.openURL('https://github.com/lnbgc')} style={styles.link}>Github</Text>.
                </Text>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30
    },

    section: {
        marginTop: 20,
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

    link: {
        marginTop: 20,
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 16,
        color: '#006AE6',
    },
})