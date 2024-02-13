import React from 'react';
import { View } from 'react-native';
import AddBook from "../components/Addbook";

const AddBookScreen = ({ route, navigation }) => {
    const { libraryId } = route.params;

    const handleAddBook = async (bookDetails) => {
        // Implement the logic to add the book to the library
        try {
            const response = await fetch(`http://193.136.62.24/v1/library/${libraryId}/book/${bookDetails.isbn}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookDetails),
            });

            if (response.ok) {
                // Book added successfully
                alert('Book added successfully!');
                navigation.goBack();
            } else {
                // Handle error case
                alert('Error adding book. Please try again.');
            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Error adding book. Please try again.');
        }
    };

    return (
        <View>
            <AddBook onAddBook={handleAddBook} />
        </View>
    );
};

export default AddBookScreen;
