import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../News/';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function NewsSlider() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews() {
            const data = await fetchNewsData();
            setNews(data.slice(0, 7));
        }
        getNews();
    }, []);

    return (
        <div className="w-4/5 md:w-1/2 mx-auto py-0 relative" style={{ marginBottom: '200px' }}>
        <Carousel showArrows={true} showThumbs={false} showStatus={false} className='lg:h-72 md:h-64 sm:h-64 bg-gray-800 rounded'>
            {news.map((article, index) => (
                <div key={index} className="relative">
                    <img src={article.multimedia.find(item => item.format === 'threeByTwoSmallAt2X').url} alt="Article" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                        <h2 className="text-white text-2xl font-semibold text-center article-title">{article.title}</h2>
                        <p className="text-gray-300 text-sm mb-4 text-center article-abstract">{article.abstract}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <button className="bg-indigo-500 text-white font-medium text-sm px-4 py-2 rounded hover:bg-indigo-400 transition duration-300 article-button">Go to Article</button>
                        </a>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
    );
}
