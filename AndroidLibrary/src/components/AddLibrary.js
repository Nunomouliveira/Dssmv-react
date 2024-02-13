import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

const AddLibrary = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [openTimeHour, setOpenTimeHour] = useState('');
    const [openTimeMinute, setOpenTimeMinute] = useState('');
    const [closeTimeHour, setCloseTimeHour] = useState('');
    const [closeTimeMinute, setCloseTimeMinute] = useState('');
    const [openDays, setOpenDays] = useState('');
    const [open, setOpen] = useState(true); // Updated state for boolean field
    const [openStatement, setOpenStatement] = useState('');

    const formatTime = (hour, minute) => {
        // Format the hour and minute to HH:mm:ss
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');
        return `${formattedHour}:${formattedMinute}:00`;
    };

    const handleAddLibrary = async () => {
        try {
        // Validate that all required fields are filled
        if (!name || !address || !openTimeHour || !openTimeMinute || !closeTimeHour || !closeTimeMinute || !openDays || open === null) {
            // Show an alert or set an error state to inform the user
            alert('Please fill in all required fields');
            return;
        }

        const libraryInfo = {
            name,
            address,
            openTime: formatTime(openTimeHour, openTimeMinute),
            closeTime: formatTime(closeTimeHour, closeTimeMinute),
            openDays,
            open,
            openStatement,
        };

        await onSubmit(libraryInfo);
    } catch (error) {
        console.error('Error adding library:', error);
    }
    };

    return (
        <View>
            <TextInput placeholder="Library Name" onChangeText={setName} />
            <TextInput placeholder="Library Address" onChangeText={setAddress} />
            <TextInput placeholder="Open Time Hour" onChangeText={setOpenTimeHour} keyboardType="numeric" />
            <TextInput placeholder="Open Time Minute" onChangeText={setOpenTimeMinute} keyboardType="numeric" />
            <TextInput placeholder="Close Time Hour" onChangeText={setCloseTimeHour} keyboardType="numeric" />
            <TextInput placeholder="Close Time Minute" onChangeText={setCloseTimeMinute} keyboardType="numeric" />
            <TextInput placeholder="Open Days" onChangeText={setOpenDays} />
            {/* Add TextInput for the missing fields */}
            <TextInput placeholder="Open Statement" onChangeText={setOpenStatement} />
            <TextInput placeholder="Open (true/false)" onChangeText={setOpen} keyboardType="numeric" />

            <Button title="Add Library" onPress={handleAddLibrary} />
        </View>
    );
};

export default AddLibrary;
