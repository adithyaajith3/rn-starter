import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {

    const [searchTerm, setSearch] = useState('');

    return <View style={ styles.backgroundStyle }>
        <SearchBar search={ searchTerm } onSearch={ (search) => setSearch(search) } />
        <Text>Search Screen { searchTerm }</Text>
    </View>
}

styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: "#fff",
    }
})

export default SearchScreen;