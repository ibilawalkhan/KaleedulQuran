import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from 'react-native-paper'

function TopContainer(props) {
    return (
        <View style={styles.heading}>
            <Image source={require('../Images/logo.jpeg')} style={styles.logo} />
            <Text variant="headlineLarge" style={styles.heading1}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        borderRadius: 80
    },
    heading1: {
        fontWeight: 'bold',
        color: '#1AA400',
        fontFamily: 'absolute',
        fontStyle: 'normal',
        fontSize: 35,
    },
})

export default TopContainer