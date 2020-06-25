import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


const HomeScreen = ( { navigation } ) => {
    return <View style={styles.container}>
        <Button title="Counter Screen with Reductor" onPress={ () => {
          navigation.navigate("CounterReductor")
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