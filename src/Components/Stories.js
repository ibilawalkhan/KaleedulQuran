import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Text } from 'react-native'
import TopContainer from './TopContainer'
import StoryName from './StoryName'
import { useNavigation } from '@react-navigation/native'


function Namesection({ navigation }) {

    return (
        <View style={styles.container}>
            <TopContainer name="Prophet Stories" />
            <View style={styles.buttonContainer}>
                <View>
                    <Text style={styles.heading}>All the stories given below {'\n'} are from the Holy Quran</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <StoryName navigation={navigation} name="ISMAIL A.S" />
                    <StoryName navigation={navigation} name="Muhammad SAW" />
                    <StoryName navigation={navigation} name="ADAM A.S" />
                    <StoryName navigation={navigation} name="NUH A.S" />
                    <StoryName navigation={navigation} name="ISHAQ A.S" />
                    <StoryName navigation={navigation} name="Ibrahim A.S" />
                    <StoryName navigation={navigation} name="Musa A.S" />
                    <StoryName navigation={navigation} name="Harun A.S" />
                    <StoryName navigation={navigation} name="Isa A.S" />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    heading: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Kumbh Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        marginTop: 5,
        color: '#343434'
    },

    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 90
    },
    scrollViewContent: {
        flexGrow: 1,
    },

})

export default Namesection