import axios from 'axios';
import React, { useState } from 'react';
import { Loader } from './Loader';
// import { SearchIcon } from 'react-icons/BiSearch';


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
            <div className="relative">
                <input
                    type="text"
                    placeholder="Article name or keywords"
                    onChange={(e) => handleChange(e)}

                    className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none text-black font-bold border border-black"

                />
                <i className="fa fa-search text-black absolute left-3 top-1/2 transform -translate-y-1/2 z-20"></i>
                <button className="h-10 w-20 text-white rounded-lg bg-black ml-2">
                    Search
                </button>
            </div>

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
