// EditLibraryScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import EditLibrary from '../components/EditLibrary';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditLibraryScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { library } = route.params;
    const [updatedLibrary, setUpdatedLibrary] = useState(library);





    return (
        <View style={styles.container}>
            <Text>Edit Library:</Text>
            <EditLibrary library={updatedLibrary} onEdit={setUpdatedLibrary} />




        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EditLibraryScreen;
