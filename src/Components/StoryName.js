import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import firestore from '@react-native-firebase/firestore';

function StoryName({ navigation, name }) {
    const [fetchStory, setFetchStory] = useState('');

    useEffect(() => {
        if (name) {
            // getProphetStory(name);
        }
    }, [name, navigation]);

    const getProphetStory = async (key) => {
        try {
            const documentRef = firestore().collection('story').doc(key);
            const documentSnapshot = await documentRef.get();

            if (documentSnapshot.exists) {
                const storyData = documentSnapshot.data();
                console.log(storyData)

                // Fields and values into two parts 
                // Create an object to store fields and values
                const fieldsAndValues = {};

                // Iterate over each field in storyData
                for (const field in storyData) {
                    if (Object.hasOwnProperty.call(storyData, field)) {
                        const value = storyData[field];

                        // Add the field and value to the object
                        fieldsAndValues[field] = value;

                        console.log(`${field}: ${value}`);
                    }
                }

                setFetchStory(storyData);
                navigation.navigate('Story', { name: key, fieldsAndValues });
            } else {
                console.log('Document does not exist');
                setFetchStory(null);
            }
        } catch (error) {
            console.error('Error fetching document:', error);
            setFetchStory(null);
        }
    };

    return (
        <View>
            <TouchableOpacity style={styles.btnView} onPress={() => getProphetStory(name)}>
                <View style={styles.badge}>
                    <Text style={{ color: 'white' }}>Story of Prophet</Text>
                </View>

                <View style={styles.fullBtn}>
                    <View>
                        <Text style={styles.btnTxt}>
                            {name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -16,
        left: 0,
        backgroundColor: '#1AA400',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8
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
        width: 150,
        height: 30,
        left: 25,
        top: 4
    },
    fullBtn: {
        flex: 1,
        flexDirection: 'row'
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 110,
        bottom: -7,

    },
})

export default StoryName