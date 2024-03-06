import axios from 'axios';

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNewsData() {
    try {
        const url = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${apiKey}`;
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching news data:', error);
        return [];   
    }
}
