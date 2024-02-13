import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import BooksList from '../components/BooksList';

const BooksListScreen = ({ route, navigation }) => {
    const { libraryId } = route.params;
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, [libraryId]);

    const fetchBooks = async () => {
        try {
            const response = await fetch(`http://193.136.62.24/v1/library/${libraryId}/book`);
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleBookPress = (book) => {
        const { library, isbn } = book;
        navigation.navigate('BookDetailsScreen', { libraryId: library.id, isbn });
    };

    const refreshBooks = async () => {
        try {
            await fetchBooks();
        } catch (error) {
            console.error('Error refreshing books:', error);
        }
    };

    return (
        <View>
            <Button title="Refresh Books" onPress={refreshBooks} />
            <BooksList books={books} onBookPress={handleBookPress} />
        </View>
    );
};

export default BooksListScreen;
