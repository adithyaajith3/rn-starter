import React, { useReducer } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


const reducer = (state, action) => {
    //state === { count: number }
    //action === { type: 'increment' || 'decrement', payload: 1 }
    
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}

const CounterReductor = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return <View style={styles.container}>
        <Button title="Increase" onPress={ () =>
            dispatch({ type: 'increment', payload: 1 }) } />
        <Button title="Decrease" onPress={ () =>
            dispatch({ type: 'decrement', payload: 1 }) }/>
        <Text>Current Count: {state.count}</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  }
});

export default CounterReductor;