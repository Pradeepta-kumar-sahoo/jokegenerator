import React, { useEffect, useState } from 'react';

const Joke = () => {
    const [joke, setJoke] = useState("");
    // const [sum, setSum] = useState(0);

    
    const fetchJoke = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => res.json())
        .then((data) => {
            setJoke(data.setup + " " + data.punchline);
        });
    };

    useEffect(() => {
        
        fetchJoke();
        
        
        // const a = 5;
        // const b = 10;
        // setSum(a + b);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
           
            <div className="text-xl font-semibold text-gray-800 mb-4">{joke}</div>
            
            
            {/* <div className="text-lg font-medium text-gray-600 mb-6">Sum: {sum}</div> */}
            
           
            <button 
                onClick={fetchJoke} 
                className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                Next Joke
            </button>
        </div>
    );
};

export default Joke;
