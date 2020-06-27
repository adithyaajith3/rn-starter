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
        <Button title="View Layout" onPress={ () => {
          navigation.navigate("Align")
        } }/>
        <Button title="Restaurant App" onPress={ () => {
          navigation.navigate("Search")
        } }/>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

export default HomeScreen;