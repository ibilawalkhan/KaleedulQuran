import React, { memo } from 'react'
import { View, StatusBar, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Text, } from 'react-native-paper'

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width


function Startup({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.heading}>
                <Text variant="headlineLarge" style={styles.heading1}>Kaleed ul Quran</Text>
                <Text style={styles.heading2}>Lets Explore Islam</Text>
            </View>
            <View style={styles.logoView}>
                <Image source={require('../Images/logo.jpeg')} style={styles.logo} />
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btnTxt}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerView}>
                <Image source={require('../Images/masjid.jpeg')} style={styles.footer} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        color: 'white'
    },
    heading: {
        marginLeft: 82,
        marginTop: 120
    },
    heading1: {
        fontWeight: 'bold',
        color: '#1AA400',
        fontFamily: 'absolute',
        fontStyle: 'normal',
        fontSize: 35,
    },
    heading2: {
        marginLeft: 50,
        color: '#FFFFFF',
        fontFamily: 'Kumbh Sans',
        width: 200,
        height: 30,
        fontWeight: 400,
        fontSize: 18,
        opacity: 0.7
    },
    logoView: {
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 30,
        borderRadius: 80
    },
    btnView: {
        marginTop: 30,
        backgroundColor: '#FFC53E',
        width: 140,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 15,
    },
    btnTxt: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    footerView: {
        marginTop: 22,
        width: 513,
        height: 475,
        justifyContent: 'center'
    },
    footer: {
        width: win.width,
        height: 362 * ratio,
        opacity: 0.7,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
    }

})

export default Startup