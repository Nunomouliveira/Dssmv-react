import React from 'react';
import { View, Text, Button } from 'react-native';

const DeleteLibrary = ({ library, onDelete, onCancel }) => {
    const handleDelete = async () => {
        try {
            // Make a DELETE request to the API with the library ID
            const response = await fetch(`http://193.136.62.24/v1/library/${library.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Assuming the request was successful
            // You may want to check the response status and handle errors accordingly

            // Call the onDelete function passed as a prop to notify the parent component
            onDelete();

            // For example, log a message
            console.log('Library deleted successfully');
        } catch (error) {
            console.error('Error deleting library:', error);
        }
    };

    return (
        <View>
            <Text>Delete Library</Text>
            <Text>Are you sure you want to delete the library: {library.name}?</Text>
            <Button title="Delete" onPress={handleDelete} />
            <Button title="Cancel" onPress={onCancel} />
        </View>
    );
};

export default DeleteLibrary;
