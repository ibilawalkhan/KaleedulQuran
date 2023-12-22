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
               
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.verseText}>
                            بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
                            {'\n'}
                            {fetchDua && fetchDua.dua}
                        </Text>
                        <Text style={styles.translationE}>
                            {fetchDua && fetchDua.duaEnglish}
                        </Text>
                        <Text style={styles.translationU}>
                            {fetchDua && fetchDua.duaUrdu}
                        </Text>
                    </View>
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
        paddingHorizontal: 20,
    },
    headerline: {
        alignItems: 'center',
        marginTop: 5,
    },
    headerlineTxt: {
        fontFamily: 'Kumbh Sans',
        fontWeight: 800,
        fontSize: 15,
        color: '#000000',
    },
    cardContainer: {
        alignItems: 'center',
        marginTop: 15,
        
    },
    card: {
        borderWidth: 4,
        borderColor: '#00D8BE',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: 325,
        backgroundColor: '#1E1E1E'

    },
    verseText: {
        fontFamily: 'Kumbh Sans',
        fontWeight: 800,
        fontSize: 15,
        color: '#FFFFFF',
        marginBottom: 30,
    },
    translationE: {
        fontFamily: 'Kumbh Sans',
        fontSize: 14,
        color: '#009900',
        marginBottom: 30,
    },
    translationU: {
        fontFamily: 'Kumbh Sans',
        fontSize: 14,
        color: '#CCCC00',
    },
    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 95,
    },
});

export default Dua;
