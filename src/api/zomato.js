import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        "user-key": 
            "053bed8c64dfcd802466d74b38611f0c"
    }
});