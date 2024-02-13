// EditLibrary.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {useNavigation} from "@react-navigation/native";

const EditLibrary = ({ library, onEdit }) => {
    const [editedLibrary, setEditedLibrary] = useState({
        name: library.name,
        address: library.address,
        openTime: library.openTime,
        closeTime: library.closeTime,
        openDays: library.openDays,
        openStatement: library.openStatement,
        open: library.open,
    });

    const navigation = useNavigation();

    const handleInputChange = (field, value) => {
        setEditedLibrary((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleEdit = async () => {
        // Check if any changes were made
        if (JSON.stringify(editedLibrary) === JSON.stringify(library)) {
            // Show a popup or perform some action to notify the user that nothing was changed
            Alert.alert('No changes were made.', '', [{ text: 'OK' }]);
        } else {
            try {
                // Make an HTTP PUT request to update the library details
                const response = await fetch(`http://193.136.62.24/v1/library/${library.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(editedLibrary),
                });

                // Log the full response body
                console.log('Edit Library Response:', await response.json());

                // Assuming the request was successful
                // You may want to check the response status and handle errors accordingly

                // Call the onEdit function with the editedLibrary data
                onEdit(editedLibrary);
                navigation.goBack();
                navigation.goBack();
            } catch (error) {
                console.error('Error updating library:', error);
            }
        }
    };


    return (
        <View style={styles.container}>
            <Text>Edit Library</Text>
            <TextInput
                placeholder="Library Name"
                value={editedLibrary.name}
                onChangeText={(text) => handleInputChange('name', text)}
            />
            <TextInput
                placeholder="Library Address"
                value={editedLibrary.address}
                onChangeText={(text) => handleInputChange('address', text)}
            />
            <TextInput
                placeholder="Open Time"
                value={editedLibrary.openTime}
                onChangeText={(text) => handleInputChange('openTime', text)}
            />
            <TextInput
                placeholder="Close Time"
                value={editedLibrary.closeTime}
                onChangeText={(text) => handleInputChange('closeTime', text)}
            />
            <TextInput
                placeholder="Open Days"
                value={editedLibrary.openDays}
                onChangeText={(text) => handleInputChange('openDays', text)}
            />
            <TextInput
                placeholder="Open Statement"
                value={editedLibrary.openStatement}
                onChangeText={(text) => handleInputChange('openStatement', text)}
            />
            <TextInput
                placeholder="Open (true/false)"
                value={String(editedLibrary.open)}
                onChangeText={(text) => handleInputChange('open', text === 'true')}
            />

            <Button title="Save Changes" onPress={handleEdit} />
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

export default EditLibrary;
