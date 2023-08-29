import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import TopContainer from './TopContainer';
import { useDataContext } from './context/DataContext';

function Verses({ navigation }) {
    const { data } = useDataContext();

    const [text, setText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {
        const normalizedSearchText = normalizeText(text);
        const filteredArray = data.filter((item) => {
            const normalizedVerseText = normalizeText(item.verse_text);
            return normalizedVerseText.includes(normalizedSearchText);
        });
        console.log(filteredArray.length);

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
            <View style={styles.verseOuput}>
                <View style={styles.viewno}>
                    <Text style={styles.textno}>
                        Surah no: {item.surah_number} {'\n'}
                        Verse no: {item.verse_number} {'\n'}
                    </Text>
                </View>
                <Text style={[styles.searchTranslation, styles.verseOuputTxt]}>
                    {item.verse_text}
                </Text>
            </View>
            <View style={styles.verseOuputTrans}>
                <Text style={[styles.searchTranslation, styles.verseOuputTxt]}>
                    <Text>
                        {item.translationUrdu}
                    </Text>
                </Text>
            </View>
            <View style={styles.verseOuputTrans}>
                <Text style={[styles.searchTranslation, styles.verseOuputTxt]}>
                    <Text>
                        {item.translationEnglish}
                    </Text>
                </Text>
            </View>
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
                            onChangeText={text => setText(text)}
                            style={styles.searchInput}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                            <Text style={styles.btnTxt}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.totalResultsContainer}>
                    <Text style={styles.totalResultsText}>Total results: {filteredData.length}</Text>
                </View>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.surah_number.toString() + item.verse_number.toString()}
                />
                <View style={styles.footerView}>
                    <Image source={require('../Images/footer1.jpeg')} style={styles.footer} />
                </View>
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
