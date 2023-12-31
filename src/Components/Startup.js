import React, { useEffect, useState } from 'react'
import { View, StatusBar, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Text, } from 'react-native-paper'
import { useDataContext } from './context/DataContext';
import Spinner from 'react-native-loading-spinner-overlay';

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width


function Startup({ navigation }) {

    const firebaseRealtimeDatabaseURL = "https://kaleed-ul-quran-default-rtdb.firebaseio.com/";
    const [loading, setLoading] = useState(false);

    const { setData } = useDataContext();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${firebaseRealtimeDatabaseURL}.json`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                if (jsonData) {
                    setLoading(false);
                    setData(jsonData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Spinner
                visible={loading}
                textContent={'Data Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={styles.heading}>
                <Text variant="headlineLarge" style={styles.heading1}>Kaleed ul Quran</Text>
                <Text style={styles.heading2}>Lets Explore Islam</Text>
            </View>
            <View style={styles.logoView}>
                <Image source={require('../Images/logo.png')} style={styles.logo} />
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btnTxt}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerView}>
                <Image source={require('../Images/masjid.png')} style={styles.footer} />
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
    spinnerTextStyle: {
        color: '#FFFFFF'
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