import React, { useEffect, useRef, useState } from "react";

function Course() {
    const videoRef = useRef(null);
    const selectedCourse = JSON.parse(localStorage.getItem('selectedCourse')) || {};
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Attach keyboard event listener
        const handleKeyboardEvent = (e) => {
            if (e.code === 'Space') {
                e.preventDefault(); // Prevent page scrolling
                playVideo();
            }
        };

        document.addEventListener("keydown", handleKeyboardEvent);

        // Cleanup event listener when component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyboardEvent);
        };
    }, []);

    function addToFav() {
        console.log("Added to Favorites!");
        // Implement logic to store in Firebase or localStorage
    }

    function playVideo() {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col justify-center items-center mt-10 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-white mb-4">{selectedCourse.title || "No Title"}</h1>
                <img 
                    src={selectedCourse.logo} 
                    alt={selectedCourse.title} 
                    className="w-48 h-48 rounded-full border-4 border-white shadow-md mb-6"
                />
                <p className="text-xl text-white font-medium text-center">
                    {selectedCourse.description || "No description available."}
                </p>

                {/* Video Player */}
                <div className="mt-4">
                    {selectedCourse.video ? (
                        <video ref={videoRef} controls width="400" className="rounded-lg shadow-lg">
                            <source src={selectedCourse.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <p className="text-white text-lg">No video available.</p>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex space-x-7 mt-6">
                    <button 
                        onClick={playVideo}
                        className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out">
                        {isPlaying ? "Pause Now" : "Play Now"}
                    </button>
                    <button 
                        onClick={addToFav}
                        className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out">
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Course;
