// BookDetailsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookDetails from '../components/BookDetails';

const BookDetailsScreen = ({ route }) => {
    const { libraryId, isbn } = route.params;
    const [bookDetails, setBookDetails] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`http://193.136.62.24/v1/library/${libraryId}/book/${isbn}`);
                const data = await response.json();
                setBookDetails(data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBookDetails();
    }, [libraryId, isbn]);

    return (
        <View style={styles.container}>
            {bookDetails ? (
                <BookDetails bookDetails={bookDetails} />

            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});

export default BookDetailsScreen;
