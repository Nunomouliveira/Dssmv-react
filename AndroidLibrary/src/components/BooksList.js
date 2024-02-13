import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BooksList = ({ books, onBookPress }) => {
    const navigation = useNavigation();

    const navigateToChangeStock = (library, isbn) => {
        navigation.navigate('ChangeStockScreen', { library, isbn });
    };





    return (
        <View>
            <Text style={styles.heading}>Books List:</Text>
            <FlatList
                data={books}
                keyExtractor={(item) => item.isbn}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.bookContainer} onPress={() => onBookPress(item)}>
                        <Text style={styles.title}>{item.book.title}</Text>
                        <Text style={styles.isbn}>ISBN: {item.isbn}</Text>
                        <Text style={styles.author}>Author: {item.book.authors.map((author) => author.name).join(', ')}</Text>
                        <Text style={styles.stock}>Available Stock: {item.stock}</Text>
                        <Button
                            title="Change Stock"
                            onPress={() => navigateToChangeStock(item.library, item.isbn)}
                        />

                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bookContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    isbn: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    author: {
        fontSize: 14,
        marginBottom: 5,
    },
    stock: {
        fontSize: 14,
        color: 'green',
    },
});

export default BooksList;
