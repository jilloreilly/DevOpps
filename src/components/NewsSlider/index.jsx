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
        <div className="w-1/2 mx-auto py-0 relative">
            <Carousel showArrows={true} showThumbs={false} showStatus={false} className='lg:h-48 md:h-48 sm:h-48 bg-gray-800 rounded'>
                {news.map((article, index) => (
                    <div key={index} className=" p-4 rounded relative flex flex-col justify-center items-center">
                        <h2 className="text-white text-xl font-semibold mb-4 text-center mt-4">{article.title}</h2>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mt-2">Go to Article</button>
                        </a>
                    </div>
                ))}
            </Carousel>
            <div className="flex justify-between mt-2">
                <button className="bg-white px-4 py-2 rounded shadow" onClick={() => { }}>
                    Previous
                </button>
                <button className="bg-white px-4 py-2 rounded shadow" onClick={() => { }}>
                    Next
                </button>
            </div>
        </div>
    );
}
