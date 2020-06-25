import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const ViewAlign = () => {
    return <View style={ styles.container }>
        <View style={ styles.child }></View>
        <View style={ styles.childCenter }></View>
        <View style={ styles.child }></View>
    </View>
}

styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        height: 100
    },
    child: {
        width: 50,
        backgroundColor: 'blue',
        height: 50,
    },
    childCenter: {
        alignSelf: "flex-end",
        backgroundColor: 'green',
        height: 50,
        width: 50
    }
})

export default ViewAlign;