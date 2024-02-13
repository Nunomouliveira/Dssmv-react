// MainScreen.js
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PUBLIC LIBRARY</Text>
            <Button
                title="LIBRARIES"
                onPress={() => {
                    navigation.navigate('LibraryListScreen');
                }}
                color="#795548"
                style={styles.button}
            />
            <View style={styles.separator} />
            <Button
                title="ADD LIBRARY"
                onPress={() => {
                    navigation.navigate('AddLibrary');
                }}
                color="#795548"
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D7CCC8',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        fontSize: 20,
        padding: 10,
        marginVertical: 10,
        minWidth: '70%',
    },
    separator: {
        height: 20,
    },
});

export default MainScreen;
