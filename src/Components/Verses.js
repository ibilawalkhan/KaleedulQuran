import { React, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import TopContainer from './TopContainer'

function Verses({ navigation }) {

    const [text, setText] = useState("");
    const [searchResults, setSearchResults] = useState('');


    const handleSearch = () => {
        // Perform the search logic here based on the entered text
        // For example, you can fetch the search results from an API

        // Assuming you have the search results, update the state
        setSearchResults('Search results go here');
    };


    return (
        <View style={styles.container}>
            <TopContainer name="Holly Quran" />
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
                        <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch}>
                            <Text style={styles.btnTxt}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.verseOuput}>
                    <Text style={styles.verseOuputTxt}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
                        {'\n'}
                        يسٓ
                        وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ
                        إِنَّكَ لَمِنَ ٱلۡمُرۡسَلِينَ
                    </Text>
                </View>
                <View style={styles.verseOuputTrans}>
                    <Text style={[styles.searchTranslation, styles.verseOuputTxt]}>In the name of Allah, the Entirely Merciful, the Especially Merciful.
                        Ya, Seen.
                        By the wise Qur’an.
                        Indeed you, [O Muhammad], are from among the messengers.
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
        height: 180,
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