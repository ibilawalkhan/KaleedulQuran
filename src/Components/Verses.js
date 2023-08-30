import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import TopContainer from './TopContainer';
import { useDataContext } from './context/DataContext';
import { Card } from 'react-native-paper'

function Verses({ navigation }) {
    const { data } = useDataContext();

    const [text, setText] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);


    // Todo
    /*
    const handleInputChange = (input) => {
        const normalizedInput = normalizeText(input);
        const matchingSuggestions = data
            .filter((item) => {
                const normalizedVerseText = normalizeText(item.verse_text);
                return normalizedVerseText.includes(normalizedInput);
            })
            .map((item) => item.verse_text);

        setSuggestions(matchingSuggestions);
        setText(input);
    };
    */



    const handleSearch = () => {
        const normalizedSearchText = normalizeText(text);
        const filteredArray = data.filter((item) => {
            const normalizedVerseText = normalizeText(item.verse_text);
            return normalizedVerseText.includes(normalizedSearchText);
        });

        setFilteredData(filteredArray);
    };

    const normalizeText = input => {
        return input
            .replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '')
            .replace(/(آ|إ|أ)/g, 'ا')
            .replace(/(ة)/g, 'ه')
            .replace(/(ئ|ؤ)/g, 'ء')
            .replace(/(ى)/g, 'ي')
            .toLowerCase();
    };

    const renderItem = ({ item }) => (
        <>
            <Card elevation={1} style={{ borderWidth: 1, borderColor: '#FFFFFF', backgroundColor: '#000000' }}>
                <Card.Title
                    title={`Surah: ${item.surah_number}`}
                    subtitle={`Verse: ${item.verse_number}`}
                    titleStyle={{ color: '#FFFFFF' }}
                    subtitleStyle={{ color: '#FFFFFF' }}
                />
                <Card.Content>
                    <Text variant="titleLarge" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{item.verse_text} {'\n'}</Text>
                    <Text variant="bodyMedium" style={{ color: '#009900' }}>{item.translationUrdu} {'\n'}</Text>
                    <Text variant="bodyMedium" style={{ color: '#CCCC00' }} >{item.translationEnglish} {'\n'}</Text>
                </Card.Content>
            </Card>
        </>
    );

    return (
        <View style={styles.container}>
            <TopContainer name="Holy Quran" />
            <View style={styles.bottomContainer}>
                <View style={styles.search}>
                    <View>
                        <TextInput
                            placeholder='Enter your Verse'
                            placeholderTextColor="#FFFFFF"
                            value={text}
                            // onChangeText={handleInputChange}
                            onChangeText={text => setText(text)} s
                            style={styles.searchInput}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                            <Text style={styles.btnTxt}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* Todo */}
                {/* <View style={styles.suggestionsContainer}>
                    {suggestions.map((verseText) => (
                        <TouchableOpacity
                            key={verseText}
                            style={styles.suggestionItem}
                            onPress={() => {
                                setText(verseText);
                                setSuggestions([]);
                            }}
                        >
                            <Text style={styles.suggestionText}>{verseText}</Text>
                        </TouchableOpacity>
                    ))}
                </View> */}


                <View style={styles.totalResultsContainer}>
                    <Text style={styles.totalResultsText}>Total results: {filteredData.length}</Text>
                </View>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                />
                {/* <View style={styles.footerView}>
                    <Image source={require('../Images/footer1.jpeg')} style={styles.footer} />
                </View> */}
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
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    searchInput: {
        width: 200,
        height: 50,
        marginTop: 12,
        padding: 10,
        marginRight: 8,
        borderRadius: 10,
        backgroundColor: '#1AA400',
    },
    searchButton: {
        width: 120,
        height: 50,
        marginTop: 12,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#1AA400',
    },
    suggestionsContainer: {
        position: 'absolute',
        top: 80,
        left: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 5,
        width: 300,
        maxHeight: 200,
        zIndex: 1,
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
    },
    suggestionText: {
        fontSize: 16,
    },
    btnTxt: {
        fontFamily: 'Kumbh Sans',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        color: '#FFFFFF',
        flexGrow: 0,
    },
    totalResultsContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    viewno: {
        left: -120,
        top: -50,
        borderColor: '#00D8BE',
    },
    textno: {
        fontFamily: 'Kumbh Sans',
        fontWeight: 800,
        fontSize: 10,
        color: '#000000',
    },
    totalResultsText: {
        fontSize: 16,
        color: 'black',
    },
    verseOuput: {
        width: 325,
        height: 180,
        top: 5,
        left: 45,
        borderWidth: 4,
        borderColor: '#00D8BE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verseOuputTrans: {
        width: 325,
        height: 50,
        left: 45,
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
    },
    footerView: {
        top: 30
    }
})

export default Verses;
