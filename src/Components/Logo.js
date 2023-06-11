import React from 'react'
import { StyleSheet, Image } from 'react-native'

function Logo() {
    return (
        <Image source={require('../Images/logo.jpeg')} style={styles.logo} />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 120,
        marginTop: 30,
        borderRadius: 80
    },
})

export default Logo