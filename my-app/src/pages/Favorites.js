import { useEffect, useState } from "react";
import { db, auth } from "../firebase";  
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const [playedFav, setPlayedFav] = useState(null);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
        }
    }, []);

    useEffect(() => {
        async function fetchFavorites() {
            if (!userId) return;

            const favoritesRef = doc(db, "users", userId, "favorites", "items");

            try {
                const docSnap = await getDoc(favoritesRef);
                if (docSnap.exists()) {
                    setFavorites(Object.entries(docSnap.data())); 
                } else {
                    setFavorites([]);
                }
            } catch (error) {
                console.error("Error fetching favorites:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchFavorites();
    }, [userId]);

    function getYouTubeEmbedUrl(url) {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|embed\/|v\/|.*[?&]v=))([^&?]+)/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    }

    const removeFromFavorites = async (courseId) => {
        if (!userId) return;

        const favoritesRef = doc(db, "users", userId, "favorites", "items");

        try {
            const docSnap = await getDoc(favoritesRef);
            if (docSnap.exists()) {
                let updatedFavorites = docSnap.data();
                delete updatedFavorites[courseId]; 

                await updateDoc(favoritesRef, updatedFavorites);
                setFavorites(Object.entries(updatedFavorites));
                console.log("Course removed from favorites!");
            }
        } catch (error) {
            console.error("Error removing from favorites:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold text-center mb-6">My Favorites</h1>

            {playedFav && (
                <div className="flex justify-center my-6">
                    <iframe
                        width="560"
                        height="315"
                        src={playedFav}
                        title="Favorite Video"
                        className="rounded-lg shadow-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {loading ? (
                <p className="text-center text-gray-400">Loading favorites...</p>
            ) : favorites.length === 0 ? (
                <p className="text-center text-gray-400">No favorite courses yet.</p>
            ) : (
                <div className="grid justify-between md:grid-cols-2 lg:grid-cols-3 gap-6">
{favorites.map(([courseId, course]) => (
    <div key={courseId} className="bg-gray-800 p-4 rounded-lg shadow-md">
        <img
            src={course.logo}
            alt={course.title}
            className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold h-12 overflow-hidden text-ellipsis" style={{ lineHeight: '1.5rem' }}>
            {course.title}
        </h2>
        <p className="text-gray-400 mt-2 h-16 overflow-hidden text-ellipsis" style={{ lineHeight: '1.25rem' }}>
            {course.description}
        </p>

        <div className="flex justify-between mt-4">
            <button
                onClick={() => setPlayedFav(getYouTubeEmbedUrl(course.video))}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Play Video
            </button>

            <button
                onClick={() => removeFromFavorites(courseId)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
                Remove
            </button>
        </div>
    </div>
))}

                </div>
            )}
        </div>
    );
}
