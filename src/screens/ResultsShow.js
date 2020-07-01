import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import resultDetails from "../hooks/resultDetails";


const ResultsShow = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [getResult, result, errorMessage] = resultDetails();
  
  useEffect(() => {
    getResult(id)
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.constainerStyle}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <FlatList
        data={ result.highlights }
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item }
        ListHeaderComponent={
          <>
            <Image style={styles.imageStyle} source={{ uri: result.thumb }} />
            <Text style={styles.nameStyle}>Restaurant Name: { result.name }</Text>
          </>
        }
        renderItem={ ({ item }) => {
          return <Text style={styles.highlights}>{ item }</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({ 
  constainerStyle: {
    marginHorizontal: 15
  },
  imageStyle: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginVertical: 5
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue'
  },
  highlights: {
    fontWeight: 'bold',
    marginTop: 5
  }
});

export default ResultsShow;
