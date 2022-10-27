import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export const Home = () => {


    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Quently</Text> */}
            <Text style={styles.text}>Looking for something?</Text>

            <View style={styles.searchbar}>
                <TextInput style={styles.input} placeholder="Search..." selectionColor={'#5E9EFF'} />
                <Pressable style={styles.button}>
                    <Text style={styles.button}>Search</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
    },

    title: {
        fontSize: 20,
    },
    text: {
        fontFamily: 'Inter-Tight',
        fontWeight: '600',
        fontSize: 18
    },
    searchbar: {
        // display: 'flex',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        backgroundColor: "#E6E7EB",
        borderRadius: 100,
    },
    input: {
        width: '75%',
        fontSize: 16,
        paddingLeft: 20,
    },
    button: {
        borderRadius: 100,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#006AE6",
        color: 'white',
        fontSize: 18,
    }
})