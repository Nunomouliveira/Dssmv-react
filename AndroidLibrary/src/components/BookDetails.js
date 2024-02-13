// BookDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BookDetails = ({ bookDetails }) => {
    const { book, library, stock, available, checkedOut } = bookDetails;

    // Check if book is defined and has the cover property
    if (!book || !book.cover) {
        return (
            <View style={styles.container}>
                <Text>Error: Invalid book details</Text>
            </View>
        );
    }

    const { title, authors } = book;
    const coverImageUrl = 'http://193.136.62.24/v1/' + book.cover.largeUrl.slice('/api/v1/'.length);

    return (
        <View style={styles.coverContainer}>
            <View style={styles.container}>
                <Image source={{ uri: coverImageUrl }} style={styles.coverImage} />
            </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.heading}>Book Details:</Text>
                    <Text>Title: {title}</Text>
                    <Text>Author: {authors.map((author) => author.name).join(', ')}</Text>
                    <Text>Library: {library.name}</Text>
                    <Text>Stock: {stock}</Text>
                    <Text>Available: {available}</Text>
                    <Text>Checked Out: {checkedOut}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    coverImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
    },
    coverContainer: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
    },
});

export default BookDetails;
