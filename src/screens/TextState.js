import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';


const TextState = () => {
    const [name, setName] = useState('');
    return <View style={styles.container}>
        <TextInput value={ name }
            style={ styles.text }
            autoCapitalize="none"
            autoCorrect={ false }
            onChangeText={ (inputValue) => setName(inputValue)} />
        <Text>My name is { name }</Text>
    </View>

}

styles = StyleSheet.create({ 
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