import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import TopContainer from './TopContainer'
import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

function Dua(props) {

    const [fetchDua, setFetchDua] = useState('')
    useEffect(() => {
        setFetchDua(fetchDocumentFromCollection(props.route.params.dua));
    }, [props.route.params.dua])

    const fetchDocumentFromCollection = async (key) => {
        try {
            const documentRef = firestore().collection('duas').doc(key);
            const documentSnapshot = await documentRef.get();

            if (documentSnapshot.exists) {
                setFetchDua(documentSnapshot.data());
            } else {
                console.log('Document does not exist');
                setFetchDua(null);
            }
        } catch (error) {
            console.error('Error fetching document:', error);
            setFetchDua(null);
        }
    };


    return (
        <View style={styles.container}>
            <TopContainer name={props.route.params.dua} />
            <View style={styles.bottomContainer}>
                <View style={styles.headerline}>
                    <Text style={styles.headerlineTxt}>All the Dua’s  given below {'\n'}
                        are from the Holy Quran</Text>
                </View>
                <View style={styles.verseOuput}>
                    <Text style={styles.verseOuputTxt}>
                        بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
                        {'\n'}
                        {fetchDua && fetchDua.dua}
                    </Text>
                </View>
                <View style={styles.verseOuputTrans}>
                    <Text style={[styles.searchTranslation, styles.verseOuputTxt]}>
                        {fetchDua && fetchDua.duaEnglish}
                    </Text>
                </View>
            </View>
            <View>
                <Image source={require('../Images/footer1.jpeg')} style={styles.footer} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerline: {
        alignItems: 'center',
        marginTop: 5
    },
    headerlineTxt: {
        fontFamily: 'Kumbh Sans',
        fontWeight: 800,
        fontSize: 15,
        color: '#000000',
    },
    verseOuput: {
        width: 325,
        height: 180,
        top: 15,
        left: 45,
        borderWidth: 4,
        borderColor: '#00D8BE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verseOuputTrans: {
        width: 325,
        height: 180,
        // top: 15,
        left: 45,
        // borderWidth: 2,
        borderColor: '#00D8BE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verseOuputTxt: {
        fontFamily: 'Kumbh Sans',
        fontWeight: 800,
        fontSize: 15,
        color: '#000000',
        alignItems: 'center',
        alignContent: 'center'
    },
    searchTranslation: {
        top: 10
    },
    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 95
    }

})

export default Dua