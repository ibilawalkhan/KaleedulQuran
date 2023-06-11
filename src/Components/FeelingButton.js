import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

function FeelingButton({ navigation, dua }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.feelingButton} onPress={() => navigation.navigate('Dua', { dua })}>
                <Text style={styles.btnTxt}>{dua}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    feelingButton: {
        width: 300,
        height: 50,
        marginTop: 12,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#FFC53E',
        gap: 10,

    },
    btnTxt: {
        fontFamily: 'Kumbh Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 18,
        color: '#000000',
        flexGrow: 0,
        left: 10
    },
})

export default FeelingButton