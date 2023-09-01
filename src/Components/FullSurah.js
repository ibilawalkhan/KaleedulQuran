import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TopContainer from './TopContainer';
import { Card } from 'react-native-paper'

export default function FullSurah() {
    return (
        <View style={styles.container}>
            <TopContainer name="Holy Quran" />
            <View style={styles.bottomContainer}>
            
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
    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 85,
    },
})