// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./src/screens/MainScreen";
import LibraryListScreen from "./src/screens/LibraryListScreen";
import AddLibraryScreen from "./src/screens/AddLibraryScreen";
import LibraryDetailsScreen from "./src/screens/LibraryDetailsScreen";
import EditLibraryScreen from "./src/screens/EditLibraryScreen";
import BooksListScreen from "./src/screens/BooksListScreen";
import BookDetailsScreen from "./src/screens/BookDetailsScreen";
import AddBookScreen from "./src/screens/AddBookScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="LibraryListScreen" component={LibraryListScreen} />
                <Stack.Screen name="LibraryDetailsScreen" component={LibraryDetailsScreen} />
                <Stack.Screen name="AddLibrary" component={AddLibraryScreen} />
                <Stack.Screen name="EditLibraryScreen" component={EditLibraryScreen} />
                <Stack.Screen name="BooksListScreen" component={BooksListScreen} />
                <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} />
                <Stack.Screen name="AddBookScreen" component={AddBookScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;



