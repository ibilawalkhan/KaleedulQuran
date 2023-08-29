import { React, useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import TopContainer from './TopContainer'


function Verses({ navigation }) {

    const [text, setText] = useState("");
    const [searchResults, setSearchResults] = useState('');
    const [fld, setFld] = useState('');
    const [val, setVal] = useState('');
    const [valE, setValE] = useState('');

    console.log(fld)
    const firebaseRealtimeDatabaseURL = "https://kaleed-ul-quran-default-rtdb.firebaseio.com/";

    const handleSearch = async () => {
        try {
            const response = await fetch(`${firebaseRealtimeDatabaseURL}.json`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // console.log(data);
            const matchingVerses = [];

            for (const key in data) {
                const verse = data[key];
                const { verse_text, translationUrdu, translationEnglish } = verse;

                const normalizedSearchText = normalizeText(text);
                const normalizedVerseText = normalizeText(verse_text);

                if (normalizedVerseText.includes(normalizedSearchText)) {
                    setFld(verse_text);
                    setVal(translationUrdu);
                    setValE(translationEnglish);
                    matchingVerses.push(verse);
                }
            }

            setSearchResults(matchingVerses);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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

    // useEffect(() => {
    //     handleSearch()
    // }, [])

    return (
        <View style={styles.container}>
            <TopContainer name="Holy Quran" />
            <View style={styles.bottomContainer}>
                <View style={styles.search}>
                    <View>
                        <TextInput
                            label="Search"
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
                <View style={styles.verseOuput}>

                    <Text style={{ color: '#000000' }}>
                        {fld}
                    </Text>

                </View>
                <View style={styles.verseOuputTrans}>
                    <Text style={[styles.searchTranslation, styles.verseOuputTxt]}>

                        <Text>
                            {val}
                        </Text>

                    </Text>
                </View>
                <View style={styles.verseOuputTrans}>
                    <Text style={[styles.searchTranslation, styles.verseOuputTxt]}>

                        <Text>
                            {valE}
                        </Text>

                    </Text>
                </View>
                <View style={styles.footerView}>
                    <Image source={require('../Images/footer1.jpeg')} style={styles.footer} />
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
    verseOuput: {
        width: 325,
        height: 180,
        top: 15,
        left: 45,
        borderWidth: 4,
        borderColor: '#00D8BE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verseOuputTrans: {
        width: 325,
        height: 80,
        // top: 15,
        left: 45,
        // borderWidth: 2,
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
        top: 165
    },
    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 95
    }
})

export default Verses