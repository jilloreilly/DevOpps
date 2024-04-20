import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../News/';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'

export default function NewsSlider() {
    const [news, setNews] = useState([]);
// using 7 news articles
    useEffect(() => {
        async function getNews() {
            const data = await fetchNewsData();
            setNews(data.slice(0, 7));
        }
        getNews();
    }, []);

    return (
        <div className="w-full lg:w-5/6 mx-auto py-0  relative">
            {/* Carousel mapping over data received from ny times api to populate carousel */}
        <Carousel showArrows={true} showThumbs={false} showStatus={false} className=' bg-gray-800 rounded-lg overflow-hidden'>
            {news.map((article, index) => (
                <div key={index} className="relative rounded-lg">
                    {article.multimedia ? (<img src={article.multimedia.find((item) => item.format === 'threeByTwoSmallAt2X')?.url} alt="Article" />) : (<img />)}                
                    <div className="absolute flex flex-col bottom-0 left-0 right-0 bg-black bg-opacity-50 py-6 px-10 gap-3">
                        <h2 className="text-white text-2xl font-semibold text-center article-title">{article.title}</h2>
                        <p className="text-gray-300  mb-4 text-center article-abstract">{article.abstract}</p>
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
