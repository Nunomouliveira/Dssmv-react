import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BooksListScreen from "./BooksListScreen";

const ChangeStockScreen = ({ route }) => {
    const { library, isbn } = route.params;
    const { id: libraryId} = library;
    const [newStock, setNewStock] = useState('');
    const navigation = useNavigation();


    const handleStockChange = async () => {
        try {
            const response = await fetch(`http://193.136.62.24/v1/library/${libraryId}/book/${isbn}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stock: newStock,
                }),
            });

            if (response.ok) {
                // Handle successful stock change
                console.log('Stock changed successfully');
                navigation.goBack();




            } else {
                // Log error details
                const errorData = await response.json();
                console.error('Error changing stock:', errorData);
            }
        } catch (error) {
            console.error('Error changing stock:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Change Stock:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter new stock"
                keyboardType="numeric"
                value={newStock}
                onChangeText={(text) => setNewStock(text)}
            />
            <Button title="Change Stock" onPress={handleStockChange} />
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
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
    },
});

export default ChangeStockScreen;
