import React, { useState } from 'react';
import zomato from '../api/zomato';

export default () =>  {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    console.log('the res ', result);
    const getResult = async (id) => {
        try {
            const response = await zomato.get(`/restaurant?res_id=${id}`);
            setResult(response.data);
        }
        catch (e) {
            console.log(e);
            setErrorMessage('Something went wrong');
        }
    }
    

    return [getResult, result, errorMessage]
}