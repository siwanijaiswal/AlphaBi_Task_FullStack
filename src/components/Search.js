import axios from 'axios';
import React, { useState } from 'react';
import { Loader } from './Loader';

export const Search = () => {
    const [result, setResult] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        clearTimeout(typingTimeout);
        const newTimeout = setTimeout(() => {
            fetchResults(value);
        }, 1200);
        setTypingTimeout(newTimeout);
    };

    const fetchResults = async (value) => {
        setIsLoading(true);
        await axios
            .get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${value}`)
            .then((res) => {
                setResult(res.data.data);
            });
        setIsLoading(false);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Home</h1>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => handleChange(e)}
                className="border rounded p-2 w-full mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">Result: </h2>
            <div className="flex flex-wrap items-center justify-center">
                {
                    isLoading ? <Loader /> : result.map((item, index) => (
                        <div key={index} className="h-48 w-48 p-2 px-2 py-4 overflow-hidden">
                            <img src={item.images.original.url} alt={item.title} className="rounded" />
                        </div>
                    ))
                }
            </div>
            {
                !isLoading && result.length === 0 && <p className="text-3xl text-center">
                    No result found
                </p>
            }
        </div>
    );
};
