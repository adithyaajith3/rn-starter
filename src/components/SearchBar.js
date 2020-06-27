import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ search, onSearch }) => {
    return <View style={ styles.backgroundStyle }>
        <Feather name="search" style={ styles.iconStyle }></Feather>
        <TextInput
         value={ search }
         onChangeText={ (text) => onSearch(text) } 
         style={ styles.inputText } 
         placeholder="Search" />
    </View>
}

styles = StyleSheet.create({
    backgroundStyle: {
        // display: "flex",
        flexDirection: "row",
        backgroundColor: "rgb(244,244,244)",
        height: 50,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 5
    },
    inputText: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: "center",
        fontSize: 35,
        marginHorizontal: 15
    }
})

export default SearchBar;