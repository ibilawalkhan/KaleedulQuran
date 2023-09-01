import { React, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import TopContainer from './TopContainer';
import { Card } from 'react-native-paper'
import { useDataContext } from './context/DataContext';

export default function FullSurah({ route, navigation }) {

    const [surah, setSurah] = useState()

    const { surahNumber } = route.params;
    console.log(surahNumber)

    const { data } = useDataContext();


    const renderItem = ({ item }) => {
        return (
            <Card elevation={1} style={{ borderWidth: 1, borderColor: '#FFFFFF', backgroundColor: '#1E1E1E' }}>
                <Card.Content>
                    <Text variant="titleLarge" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{item.verse_text}{'\n'}</Text>
                </Card.Content>
                <Card.Content>
                    <Text variant="titleLarge" style={{ color: '#009900', fontWeight: 'bold' }}>{item.translationUrdu}{'\n'}</Text>
                </Card.Content>
                <Card.Content>
                    <Text variant="titleLarge" style={{ color: '#CCCC00', fontWeight: 'bold' }}>{item.translationEnglish}{'\n'}</Text>
                </Card.Content>
            </Card>
        )
    }

    useEffect(() => {
        const versesFromSurah = data.filter((verse) => verse.surah_number === surahNumber);
        // console.log(versesFromSurah)
        setSurah(versesFromSurah)
    }, [])



    return (
        <View style={styles.container}>
            <TopContainer name="Holy Quran" />
            <View style={styles.bottomContainer}>
                <FlatList
                    data={surah}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
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