import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import searchResults from "../hooks/searchResults"
import ResultsList from "../components/ResultsList"


const SearchScreen = () => {
    const [searchTerm, setSearch] = useState('');
    const [searchApi, results, errorMessage] = searchResults();
    const filterResultsByPrice = (priceRange) => {
        // priceRange === 2 || 3 || 4
        return results.filter((result) => {
            return result.restaurant.price_range === priceRange;
        })
    };

    return <View style={styles.backgroundStyle}>
        <SearchBar search={searchTerm}
            onSearch={(search) => setSearch(search)}
            onSearchSubmit={() => searchApi(searchTerm)} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList results={filterResultsByPrice(2)} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice(3)} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice(4)} title="Big Spender" />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: "#fff",
    }
})

export default SearchScreen;    