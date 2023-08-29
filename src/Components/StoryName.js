import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

function StoryName({ navigation, name }) {
    return (
        <View>
            <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Story', { name })}>
                <View style={styles.badge}>
                    <Text style={{ color: 'white' }}>Story of Prophet</Text>
                </View>

                <View style={styles.fullBtn}>
                    <View><Text style={styles.btnTxt}>{name}</Text></View>
                    {/* <View><Image source={require('../Images/arrow.jpeg')} style={styles.icon} /></View> */}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -16,
        left: 0,
        backgroundColor: '#1AA400',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8
    },

    btnView: {
        marginTop: 30,
        backgroundColor: '#FFC53E',
        width: 300,
        height: 55,
        borderRadius: 15,
        padding: 10,
        gap: 15,
    },
    btnTxt: {
        fontFamily: 'Kumbh Sans',
        fontWeight: 'bold',
        fontSize: 18,
        fontStyle: 'normal',
        color: '#000000',
        width: 150,
        height: 30,
        left: 25,
        top: 4
    },
    fullBtn: {
        flex: 1,
        flexDirection: 'row'
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 110,
        bottom: -7,

    },
})

export default StoryName