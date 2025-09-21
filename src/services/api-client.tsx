import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '193e1edeb9b2493db5cf25b3d79abfff'
    }
})
