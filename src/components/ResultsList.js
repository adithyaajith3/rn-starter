import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';


const ResultsList = ( { title, results } ) => {
    // console.log('resultsList ', results[0].restaurant.id);
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{ title }</Text>
        <FlatList horizontal
         showsHorizontalScrollIndicator={false}
         data={ results }
         keyExtractor={ (result) => result.restaurant.id }
         renderItem={ ({ item }) => {
             return <ResultsDetail result={ item }/>
         } } />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList;