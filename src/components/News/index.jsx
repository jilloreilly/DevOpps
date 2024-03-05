import axios from 'axios';

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNewsData() {
    try {
        const url = `https://newsapi.org/v2/everything?q="technology news"&apiKey=${apiKey}&sortBy=publishedAt`;
        const response = await axios.get(url);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news data:', error);
        return [];   
    }
}
