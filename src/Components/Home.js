import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

function Home({ navigation }) {
    
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Image source={require('../Images/logo.png')} style={styles.logo} />
                <Text variant="headlineLarge" style={styles.heading1}>Kaleed ul Quran</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Verses')}>
                    <View style={styles.fullBtn}>
                        <View><Text style={styles.btnTxt}>Holy Quran </Text></View>
                        <View><Image source={require('../Images/book.png')} style={styles.icon} /></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Feeling')}>
                    <View style={styles.fullBtn}>
                        <View><Text style={styles.btnTxt}>I am Feeling </Text></View>
                        <View><Image source={require('../Images/feeling.png')} style={styles.icon} /></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Stories')}>
                    <View style={styles.fullBtn}>
                        <View><Text style={styles.btnTxt}>Prophet Stories </Text></View>
                        <View><Image source={require('../Images/stories.png')} style={styles.icon} /></View>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../Images/footer2.jpeg')} style={styles.footer} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        borderRadius: 80
    },
    heading1: {
        fontWeight: 'bold',
        color: '#1AA400',
        fontFamily: 'absolute',
        fontStyle: 'normal',
        fontSize: 35,
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    btnView: {
        marginTop: 30,
        backgroundColor: '#FFC53E',
        width: 300,
        height: 55,
        borderRadius: 15,
        padding: 10,
        gap: 15,
    },
    btnTxt: {
        fontFamily: 'Kumbh Sans',
        fontWeight: 'bold',
        fontSize: 18,
        fontStyle: 'normal',
        color: '#000000',
        width: 135,
        height: 30,
        left: 25,
        top: 4
    },
    fullBtn: {
        flex: 1,
        flexDirection: 'row'
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 85,
        bottom: 8
    },
    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 95
    }

})

export default Home