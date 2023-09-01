import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import TopContainer from './TopContainer';
import { Card } from 'react-native-paper'

export default function VersesResult({ route, navigation }) {
    const { verse, translationUrdu, translationEnglish, surahno, verseno } = route.params;

    return (
        <View style={styles.container}>
            <TopContainer name="Holy Quran" />
            <View style={styles.bottomContainer}>
                <Card elevation={1} style={{ borderWidth: 1, borderColor: '#FFFFFF', backgroundColor: '#1E1E1E' }}>
                    <ScrollView>
                        <Card.Title
                            title={
                                <TouchableOpacity onPress={() => navigation.navigate('FullSurah')}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                                        Read full Surah: {surahno}
                                    </Text>
                                </TouchableOpacity>
                            }
                            subtitle={`Verse: ${verseno}`}
                            titleStyle={{ color: '#FFFFFF' }}
                            subtitleStyle={{ color: '#FFFFFF' }}
                        />
                        <Card.Content>
                            <TouchableOpacity style={styles.button}>
                                <Text variant="titleLarge" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{verse} {'\n'}</Text>
                            </TouchableOpacity>
                            <Text variant="bodyMedium" style={{ color: '#009900' }}>{translationUrdu} {'\n'}</Text>
                            <Text variant="bodyMedium" style={{ color: '#CCCC00' }} >{translationEnglish} {'\n'}</Text>
                        </Card.Content>
                    </ScrollView>
                </Card>
            </View>
            <View>
                <Image source={require('../Images/footer2.jpeg')} style={styles.footer} />
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