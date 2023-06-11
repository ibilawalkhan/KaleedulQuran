import React from 'react'
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import TopContainer from './TopContainer'
import FeelingButton from './FeelingButton';
import { useNavigation } from '@react-navigation/native'

function Feeling() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <TopContainer name="I am Feeling" />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.bottomContainer}>
                    <FeelingButton navigation={navigation} dua="Angry" />
                    <FeelingButton navigation={navigation} dua="Anxious" />
                    <FeelingButton navigation={navigation} dua="Confident" />
                    <FeelingButton navigation={navigation} dua="Confused" />
                    <FeelingButton navigation={navigation} dua="Depressed" />
                    <FeelingButton navigation={navigation} dua="Doubtful" />
                    <FeelingButton navigation={navigation} dua="Greedy" />
                    <FeelingButton navigation={navigation} dua="Hurt" />
                    <FeelingButton navigation={navigation} dua="Guilty" />
                    <FeelingButton navigation={navigation} dua="Lazy" />
                </View>
            </ScrollView>
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
        alignItems: 'center'
    },
    scrollViewContent: {
        flexGrow: 1,
    },
})

export default Feeling