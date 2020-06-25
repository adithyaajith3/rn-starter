import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


const HomeScreen = ( { navigation } ) => {
    return <View style={styles.container}>
        <Button title="Counter Screen with Reductor" onPress={ () => {
          navigation.navigate("Counter")
        } }/>
        <Button title="Text input with State" onPress={ () => {
          navigation.navigate("Text")
        } }/>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;