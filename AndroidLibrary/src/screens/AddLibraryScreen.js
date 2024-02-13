import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddLibrary from '../components/AddLibrary';

const AddLibraryScreen = ({ navigation }) => {
    const handleLibrarySubmit = async (libraryInfo) => {
        try {
            // Make a POST request to the API with libraryInfo
            const response = await fetch('http://193.136.62.24/v1/library', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(libraryInfo),
            });

            // Assuming the request was successful
            // You may want to check the response status and handle errors accordingly

            // Navigate back to the main screen after adding the library
            navigation.goBack();
        } catch (error) {
            console.error('Error adding library:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Add Library</Text>
            <AddLibrary onSubmit={handleLibrarySubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AddLibraryScreen;
