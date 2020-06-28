import React, { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        searchApi('chinese')
    }, []);

    const searchApi = async (term) => {
        try{
            // const response = await zomato.get('/search', {
            //     query: {
            //         entity_id: 4,
            //         entity_type: 'city',
            //         q: {term},
            //         count: 10
            //     }
            // });
            const response = await zomato.get(`/search?entity_id=4&entity_type=city&q=${term}`);
            // console.log(`resto ${term}`, response.data.restaurants);
            setResults(response.data.restaurants);
        }
        catch (e) {
            console.log(e);
            setErrorMessage('Something went wrong');
        }
    }

    return [searchApi, results, errorMessage]
}