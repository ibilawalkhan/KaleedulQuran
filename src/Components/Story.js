import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from 'react-native'
import TopContainer from './TopContainer';

const Story = (props) => {
    return (
        <View style={styles.container}>
            <TopContainer name={props.route.params.name} />
            <View style={styles.storyContainer}>
                <Text style={styles.storyContent}>
                    According to Islamic belief, Adam was created from the material of the earth and brought to life by God. God placed Adam in a paradisical Garden. After Adam sinned by eating from the forbidden tree (Tree of Immortality), paradise was declined to him, but he may return if Adam repents from his sin.
                </Text>
            </View>
            <View>
                <Image source={require('../Images/footer2.jpeg')} style={styles.footer} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    book: {
        width: 75,
        height: 75,
        marginTop: 25,
        borderRadius: 80,
    },
    storyTitle: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginRight: 240,
    },
    heading: {
        fontWeight: 'bold',
        color: '#1AA400',
        fontFamily: 'absolute',
        fontStyle: 'normal',
        fontSize: 35,
        marginTop: 5,
    },
    storyContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    storyContent: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 24,
        padding: 15,
        fontFamily: 'Kumbh Sans',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 18,
        color: '#000000'
    },
    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 85,
    },
});

export default Story;
