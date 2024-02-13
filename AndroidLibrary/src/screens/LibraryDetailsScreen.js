import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DeleteLibrary from "../components/DeleteLibrary";


const LibraryDetailsScreen = ({ route, navigation }) => {
    const { library } = route.params;
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEdit = () => {
        navigation.navigate('EditLibraryScreen', { library });
    };

    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    const handleShowBooks = () => {
        navigation.navigate('BooksListScreen', { libraryId: library.id });

    };

    const handleAddBook = () => {
        navigation.navigate('AddBookScreen', { libraryId: library.id });

    };

    const onDeleteConfirmed = () => {
        // Implement the logic to delete the library
        // You may want to show a confirmation modal before proceeding
        setShowDeleteModal(false);

        // For example, log a message
        console.log('Library deleted successfully');

        // Implement any additional logic after successful deletion
        // For example, navigate back to the library list screen
        navigation.goBack();
    };

    const onCancelDelete = () => {
        // Implement the logic to cancel the delete operation
        setShowDeleteModal(false);
    };

    return (
        <View>
            <Text>Library Details:</Text>
            <Text>Name: {library.name}</Text>
            <Text>Address: {library.address}</Text>
            <Text>CloseTime: {library.closeTime}</Text>
            <Text>OpenTime: {library.openTime}</Text>
            <Text>Opendays: {library.openDays}</Text>
            <Text>OpenStatement: {library.openStatement}</Text>
            <Text>Open: {library.open ? 'Yes' : 'No'}</Text>

            {/* Add buttons */}
            <Button title="Edit" onPress={handleEdit} />
            <Button title="Delete" onPress={handleDelete} />
            <Button title="Show Books" onPress={handleShowBooks} />
            <Button title="Add Book" onPress={handleAddBook} />

            {/* Render the DeleteLibrary component as a modal */}
            {showDeleteModal && (
                <DeleteLibrary library={library} onDelete={onDeleteConfirmed} onCancel={onCancelDelete} />
            )}
        </View>
    );
};

export default LibraryDetailsScreen;
