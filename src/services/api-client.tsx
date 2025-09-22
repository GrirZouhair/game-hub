import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '45c5af85654d41ee8cf41e483628a540'
    }
})
