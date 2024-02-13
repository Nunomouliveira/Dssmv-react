import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

const LibraryList = ({ navigation }) => {
    const [libraries, setLibraries] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://193.136.62.24/v1/library');
            const data = await response.json();
            setLibraries(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLibraryPress = (library) => {
        // Navigate to the screen that shows details of the selected library
        navigation.navigate('LibraryDetailsScreen', { library });
    };

    const handleRefresh = () => {
        // Call the fetchData function again to refresh the library list
        fetchData();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Library List:</Text>
            <Button title="Refresh" onPress={handleRefresh} />
            <FlatList
                data={libraries}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.libraryContainer}
                        onPress={() => handleLibraryPress(item)}
                    >
                        <Text style={styles.libraryName}>{item.name}</Text>
                        <Text style={styles.libraryAddress}>Address: {item.address}</Text>
                        {/* Add other library information as needed */}
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    libraryContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    libraryName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    libraryAddress: {
        fontSize: 14,
        marginBottom: 5,
    },
    flatListContent: {
        paddingBottom: 20, // Adjust as needed
    },
    // Add styles for other library information if needed
});

export default LibraryList;
