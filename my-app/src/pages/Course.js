import React, { useEffect, useRef, useState } from "react";
import { db, auth } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

function Course() {
    const selectedCourse = JSON.parse(localStorage.getItem("selectedCourse")) || {};
    const playerRef = useRef(null);
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [userId, setUserId] = useState(null);
    const courseId = selectedCourse.id || new Date().getTime().toString(); 
    const [isFavorite, setIsFavorite] = useState(false);
    const [playedFav, setPlayedFav] = useState(null);

    function getYouTubeVideoId(url) {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|embed\/|v\/|.*[?&]v=))([^&?]+)/);
        return match ? match[1] : null;
    }

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
        }
    }, []);
    useEffect(()=>{
        async function checkIfFavorite() {
            if(userId) {
                const courseRef = doc(db, "users", userId, "favorites", "items"); 
                try {
                    const docSnap = await getDoc(courseRef);
                    if (docSnap.exists()) {
                        const existingFavorites = docSnap.data();
                        setIsFavorite(!!existingFavorites[courseId]);
                    } else {
                        setIsFavorite(false);
                    }
                } catch (error) {
                    console.error("Error checking favorites:", error);
                }
            }
        }
        checkIfFavorite();
        console.log("is favorite", isFavorite);
    },[userId])

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

    const createPlayer = () => {
        const videoId = getYouTubeVideoId(selectedCourse.video);
        if (!videoId) return;

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

    async function addToFav() {
        if (!userId) {
            console.error("User not authenticated");
            return;
        }

        const courseRef = doc(db, "users", userId, "favorites", "items"); 

        try {
            const docSnap = await getDoc(courseRef);
            let existingFavorites = docSnap.exists() ? docSnap.data() : {};

            if (!existingFavorites[courseId]) {
                existingFavorites[courseId] = {
                    title: selectedCourse.title,
                    description: selectedCourse.description,
                    logo: selectedCourse.logo,
                    video: selectedCourse.video,
                    courseId: selectedCourse.id,
                };

                await setDoc(courseRef, existingFavorites);
                setIsFavorite(true); // Update the state after successful addition
                console.log("Course added to favorites!");
            } else {
                console.log("Course already in favorites.");
            }
        } catch (error) {
            console.error("Error adding to favorites:", error);
        }
    }

    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center mt-10 p-6 bg-gray-900 rounded-xl shadow-lg">
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

                <div className="flex space-x-7 mt-6">
                    <button
                        onClick={addToFav}
                        disabled={isFavorite}
                        className={`px-6 py-2 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out
                            ${isFavorite 
                                ? 'bg-green-500 text-white cursor-not-allowed hover:bg-green-600' 
                                : 'bg-white text-indigo-600 hover:bg-indigo-700 hover:text-white'
                            }`}
                    >
                        {isFavorite ? 'Added to Favorites ✓' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Course;
