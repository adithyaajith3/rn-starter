import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import zomato from "../api/zomato";
import { FlatList } from "react-native-gesture-handler";


const ResultsShow = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  console.log('the res ', result);
  const getResult = async (id) => {
    const response = await zomato.get(`/restaurant?res_id=${id}`);
    setResult(response.data);
  }
  useEffect(() => {
    getResult(id)
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={styles.constainerStyle}>
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
