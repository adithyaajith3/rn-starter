import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import SearchBar from "../components/SearchBar";


const TextState = () => {
    const [name, setName] = useState('');
    return <View style={styles.container}>
        <TextInput value={ name }
            style={ styles.text }
            autoCapitalize="none"
            autoCorrect={ false }
            onChangeText={ (inputValue) => setName(inputValue)} />
        {/* <SearchBar search={ name } onSearch={ (search) => setName(search) } /> */}
        <Text>My name is { name }</Text>
        { name.length < 3 && name.length !== 0 ? <Text>Name cannot have less than 3 characters</Text> : null }
    </View>

}

const styles = StyleSheet.create({ 
    text: {
        borderColor: 'black',
        borderWidth: 0.5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    }

});

export default TextState;