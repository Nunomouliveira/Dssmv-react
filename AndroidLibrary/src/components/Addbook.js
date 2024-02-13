import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddBook = ({ onAddBook }) => {
    const [isbn, setISBN] = useState('');
    const [stock, setStock] = useState('');

    const handleAddBook = () => {
        // Validate ISBN and stock before proceeding
        if (isbn.trim() === '' || isNaN(stock) || stock.trim() === '') {
            alert('Please enter valid ISBN and stock.');
            return;
        }

        // Call the onAddBook function with the book details
        onAddBook({ isbn, stock: parseInt(stock, 10) });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Book</Text>
            <TextInput
                style={styles.input}
                placeholder="ISBN"
                value={isbn}
                onChangeText={(text) => setISBN(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Stock"
                keyboardType="numeric"
                value={stock}
                onChangeText={(text) => setStock(text)}
            />
            <Button title="Add Book" onPress={handleAddBook} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default AddBook;
