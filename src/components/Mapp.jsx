import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Mapp() {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
          .then(myjson => setData(myjson))
          .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="p-8 mt-20 overflow-y-scroll h-[calc(100vh-6.625rem)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
                {
                    data && data.length > 0 && data.map(val => (
                        <div key={val.id} className="flex flex-col rounded-lg bg-white shadow-lg overflow-hidden">
                            <img src={val.image} alt={val.name} className="w-full h-50 " />
                            <div className="p-4">
                                <h1 className="text-lg font-bold mb-2">{val.name}</h1>
                                <p className="mb-2 text-sm text-gray-600">
                                    {val.Description}
                                    <span className="block mt-2">
                                        <a href="https://www.youtube.com/watch?v=mTz9wFOez5w&t=1504s" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           className="text-blue-500 underline">
                                           Watch the video
                                        </a>
                                    </span>
                                </p>
                                <p className="text-xs text-gray-500">{val.channelName}</p>
                                <p className="text-xs text-gray-500">{val.views}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Mapp;
