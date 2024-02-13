import React from 'react';
import { View, Text, FlatList } from 'react-native';
import LibraryList from "../components/LibraryList";
import { StyleSheet } from 'react-native';

const LibraryListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LibraryList navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
});

export default LibraryListScreen;






