import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import materials from './Videos';

function Resources() {
    const [clickedSection, setClickedSection] = useState(""); 
    const [hoverSection, setHoverSection] = useState(""); 
    const [videoDurations, setVideoDurations] = useState({});
    const navigate = useNavigate();

    const subjects = [
        { title: "Computer Science", id: "computer_science" },
        { title: "Mathematics", id: "mathematics" },
        { title: "Physics", id: "physics" },
        { title: "Chemistry", id: "chemistry" },
        { title: "Biology", id: "biology" },
        { title: "English", id: "english" },
        { title: "Romanian", id: "romanian" },
        { title: "Geography", id: "geography" },
        { title: "History", id: "history" },
        { title: "Economics", id: "economics" },
    ];

    const scrollContainer = (id, direction) => {
        const container = document.getElementById(id);
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        materials.forEach((subject, subjIndex) => {
            subject.forEach((material, matIndex) => {
                if (material.video) {
                    const video = document.createElement('video');
                    video.src = material.video;
                    video.preload = 'metadata';

                    video.onloadedmetadata = () => {
                        const duration = formatDuration(video.duration);
                        setVideoDurations(prev => ({
                            ...prev,
                            [`${subjIndex}-${matIndex}`]: duration
                        }));
                    };
                }
            });
        });
    }, []);

    const formatDuration = (seconds) => {
        let mins = Math.floor(seconds / 60);
        const hours = Math.floor(mins / 60);
        mins = Math.floor(mins % 60);
        const secs = Math.floor(seconds % 60);
        return `${hours}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    };
    
    return (
        <div className="min-h-screen bg-gray-900 p-6">
            {subjects.map((subject, index) => (
                <div
                    key={index}
                    className={`mb-6 mx-auto w-[90%] max-w-6xl rounded-lg bg-gray-500 p-6 shadow-md transition-all duration-300
                        ${subject.id === "computer_science" ? "mt-44" : "mt-4"}
                        ${hoverSection === subject.id ? "border-2 border-blue-500" : "border border-gray-200"}
                        ${clickedSection === subject.id ? "bg-slate-900 text-white" : ""}`}
                    id={subject.id}
                    onMouseEnter={() => setHoverSection(subject.id)}
                    onMouseLeave={() => setHoverSection('')}
                    onClick={() => setClickedSection(subject.id)}
                >
                    <h2 className="mb-4 cursor-pointer text-center text-xl font-bold transition-colors hover:text-blue-600">
                        {subject.title}
                    </h2>
                    
                    {materials[index] && materials[index].length > 0 && clickedSection === subject.id && (
                        <div className="flex items-center gap-4">
                            <button
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    scrollContainer(`materials-${index}`, 'left');
                                }}
                            >
                                ←
                            </button>

                            <div
                                id={`materials-${index}`}
                                className="flex gap-6 overflow-x-auto  scroll-smooth py-4 px-2"
                            >
                                {materials[index].map((material, matIndex) => (
                                    <div
                                        key={matIndex}
                                        className="flex min-w-[300px] flex-col items-center rounded-lg bg-gray-900 p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
                                        onClick={() => {
                                            localStorage.setItem('selectedCourse', JSON.stringify(material));
                                            navigate('/course');
                                        }}
                                    >
                                        <img
                                            src={material.logo}
                                            alt={material.title}
                                            className="h-40 w-full rounded-lg object-cover"
                                        />
                                        <h3 className="mt-3 text-lg font-semibold">{material.title}</h3>
                                        
                                    </div>
                                ))}
                            </div>

                            <button
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    scrollContainer(`materials-${index}`, 'right');
                                }}
                            >
                                →
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Resources;
