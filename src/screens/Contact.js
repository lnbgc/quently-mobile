import { Linking, ScrollView, StyleSheet, Text, View } from "react-native"
import { useTheme } from "../contexts/ThemeProvider";

export const Contact = () => {

    const { theme } = useTheme();

    return (
        <ScrollView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <View style={styles.section}>
                <View style={[styles.titleSection, {borderColor: theme.secondaryColor}]}>
                    <Text style={[styles.title, {color: theme.textColor}]}>Contact</Text>
                    <Text style={[styles.subTitle, {color: theme.transparentColor}]}>/ˈkɒntækt/</Text>
                </View>
                <Text style={[styles.text, {color: theme.textColor}]}>For any inquiries, contact me at <Text onPress={() => Linking.openURL('mailto:support@example.com')} style={[styles.link, {color: theme.accentColor}]}>lena.bageac@epitech.eu</Text>!</Text>
                <Text style={[styles.text, {color: theme.textColor}]}>
                    You can also check out my other projects on my <Text onPress={() => Linking.openURL('https://github.com/lnbgc')} style={[styles.link, {color: theme.accentColor}]}>Github</Text>.
                </Text>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },

    section: {
        marginTop: 20,
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

    link: {
        marginTop: 20,
        fontFamily: 'Inter-Tight-Bold',
        fontSize: 14,
    },
})