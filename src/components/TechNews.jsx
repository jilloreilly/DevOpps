import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TechNews() {
  const [techNews, setTechNews] = useState([]);

  useEffect(() => {
    async function fetchTechNews() {
      try {
        // Making a GET request to the Hacker News API to get tech news
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');

        // Getting the IDs of the latest 5 news articles
        const techNewsIds = response.data.slice(0, 2);

        // Array to store the data of the news articles
        const techNewsData = [];

        // Looping through the news IDs to fetch details of each article
        for (const id of techNewsIds) {
          const newsResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          techNewsData.push(newsResponse.data);
        }

        // Updating the state with the news data
        setTechNews(techNewsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    // Calling the function to fetch news when the component mounts
    fetchTechNews();
  }, []);

  return (
    <aside className="max-w-xs mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Tech News</h2>
      {/* News List */}
      <ul>
        {techNews.map((news, index) => (
          <li
            key={news.id}
            className={`bg-white p-4 rounded shadow mb-4 ${index % 2 === 0 ? 'bg-blue-200' : 'bg-green-200'}`}
          >
            <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
            <p className="text-gray-600">{news.url}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TechNews;
