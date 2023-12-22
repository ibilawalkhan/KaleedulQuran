import React, { useRef } from 'react';
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import TopContainer from './TopContainer';

const Story = ({ route }) => {
    const flatListRef = useRef(null);

    const renderFieldsAndValues = () => {
        const { fieldsAndValues } = route.params;

        if (!fieldsAndValues) {
            return [];
        }

        // Convert the object into an array of key-value pairs
        const data = Object.entries(fieldsAndValues).map(([field, value]) => ({
            field,
            value,
        }));

        return data;
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.item} key={index}>
            <Text style={styles.field}>{item.field}:</Text>
            <Text style={styles.value}>{item.value}</Text>
        </View>
    );

    const renderTOC = () => {
        const fields = renderFieldsAndValues().map(({ field }) => field);

        return (
            <View style={styles.tocContainer}>
                <Text style={styles.tocHeader}>Table of Contents</Text>
                <View style={styles.column}>
                    {fields.map((field, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.tocItem}
                            onPress={() => {
                                // Scroll to the corresponding item in FlatList
                                flatListRef.current?.scrollToIndex({ animated: true, index });
                            }}
                        >
                            <Text style={styles.tocText}>{field}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TopContainer name={route.params.name} />

            <FlatList
                ref={flatListRef}
                style={styles.wholeStory}
                data={renderFieldsAndValues()}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => (
                    <View>{renderTOC()}</View>
                )}
                initialScrollIndex={0} 
                onScrollToIndexFailed={(info) => {
                    const wait = new Promise((resolve) => setTimeout(resolve, 500));
                    wait.then(() => {
                        flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
                    });
                }}
            />

            <Image source={require('../Images/footer2.jpeg')} style={styles.footer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    tocContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingVertical: 10,
        marginBottom: 10,
    },
    tocHeader: {
        fontSize: 28,
        color: '#CCCC00',
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'center',
    },
    column: {
        flex: 1,
        alignSelf: 'center',
        padding: 2,
    },
    tocItem: {
        paddingVertical: 10,
    },
    tocText: {
        fontSize: 16,
        color: '#1AA400',
        fontWeight: 'bold',
    },
    wholeStory: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        justifyContent: 'space-between',
        paddingHorizontal: 26,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#1E1E1E'
    },
    field: {
        fontSize: 24,
        color: '#CCCC00',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        alignSelf: 'flex-end',
        color: '#cecece',
    },
    footer: {
        left: 0,
        right: 0,
        width: 500,
        height: 85,
    },
});

export default Story;
