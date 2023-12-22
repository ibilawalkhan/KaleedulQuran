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
                    <StoryName navigation={navigation} name="ADAM A.S" />
                    <StoryName navigation={navigation} name="Idris A.S" />
                    <StoryName navigation={navigation} name="Nuh A.S" />
                    <StoryName navigation={navigation} name="Hud A.S" />
                    <StoryName navigation={navigation} name="Salih A.S" />
                    <StoryName navigation={navigation} name="Ibrahim A.S" />
                    <StoryName navigation={navigation} name="Ismail A.S" />
                    <StoryName navigation={navigation} name="Ishaq A.S" />
                    <StoryName navigation={navigation} name="Yaqub A.S" />
                    <StoryName navigation={navigation} name="Lut A.S" />
                    <StoryName navigation={navigation} name="Shuaib A.S" />
                    <StoryName navigation={navigation} name="Yusuf A.S" />
                    <StoryName navigation={navigation} name="Ayyub A.S" />
                    <StoryName navigation={navigation} name="Dhul-Kifl A.S" />
                    <StoryName navigation={navigation} name="Yunus A.S" />
                    <StoryName navigation={navigation} name="Musa A.S" />
                    <StoryName navigation={navigation} name="Hizqeel A.S" />
                    <StoryName navigation={navigation} name="Elyas A.S" />
                    <StoryName navigation={navigation} name="Shammil A.S" />
                    <StoryName navigation={navigation} name="Dawood A.S" />
                    <StoryName navigation={navigation} name="Sulaiman A.S" />
                    <StoryName navigation={navigation} name="Shia A.S" />
                    <StoryName navigation={navigation} name="Aramaya A.S" />
                    <StoryName navigation={navigation} name="Daniel A.S" />
                    <StoryName navigation={navigation} name="Uzair A.S" />
                    <StoryName navigation={navigation} name="Zakariyah A.S" />
                    <StoryName navigation={navigation} name="Yahya A.S" />
                    <StoryName navigation={navigation} name="Isa A.S" />
                    <StoryName navigation={navigation} name="Muhammad SAW" />

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