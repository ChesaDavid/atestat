import React, { useEffect, useRef, useState } from "react";

function Course() {
    const selectedCourse = JSON.parse(localStorage.getItem("selectedCourse")) || {};
    const playerRef = useRef(null);
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    // Extract YouTube Video ID
    function getYouTubeVideoId(url) {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|embed\/|v\/|.*[?&]v=))([^&?]+)/);
        return match ? match[1] : null;
    }

    // Load YouTube API once
    useEffect(() => {
        if (!window.YT) {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                console.log("YouTube API Loaded");
                if (selectedCourse.video) createPlayer();
            };
        } else {
            if (selectedCourse.video) createPlayer();
        }
    }, [selectedCourse.video]);

    // Initialize YouTube Player
    const createPlayer = () => {
        const videoId = getYouTubeVideoId(selectedCourse.video);
        if (!videoId) return;

        // Create player when API is ready
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("youtube-player", {
                videoId,
                playerVars: { rel: 0, showinfo: 0 },
                events: {
                    onReady: (event) => {
                        console.log("YouTube Player Ready");
                        playerRef.current = event.target;
                        setIsPlayerReady(true);
                    },
                },
            });
        };

        // In case the API is already loaded
        if (window.YT && window.YT.Player) {
            playerRef.current = new window.YT.Player("youtube-player", {
                videoId,
                playerVars: { rel: 0, showinfo: 0 },
                events: {
                    onReady: (event) => {
                        console.log("YouTube Player Ready");
                        playerRef.current = event.target;
                        setIsPlayerReady(true);
                    },
                },
            });
        }
    };

    function addToFav() {
        console.log("Added to Favorites!");
        // Logic to store in Firebase or localStorage
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col justify-center items-center mt-10 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-white mb-4">
                    {selectedCourse.title || "No Title"}
                </h1>
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
                        <div id="youtube-player" className="rounded-lg shadow-lg w-[400px] h-[225px] relative">
                            {!isPlayerReady && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                                    <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                                    <p className="mt-2 text-white">Loading video...</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-white text-lg">No video available.</p>
                    )}
                </div>

                {/* Add to Favorites Button */}
                <div className="flex space-x-7 mt-6">
                    <button
                        onClick={addToFav}
                        className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out"
                    >
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Course;
