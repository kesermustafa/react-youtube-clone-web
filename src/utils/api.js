import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.BASE_URL,
    params: {
        geo: 'TR',
        lang: 'tr'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.API_KEY,
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
});

export default api;