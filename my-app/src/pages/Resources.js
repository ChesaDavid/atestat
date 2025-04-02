import React, { useState,useEffect } from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { displayName } from "../firebase";
import { video } from 'framer-motion/client';
import materials from './Videos';



function Resources() {
    const [clickedSection, setClickedSection] = useState(""); 
    const [hoverSection, setHoverSection] = useState(""); 
    const [videoDurations, setVideoDurations] = useState({});
    const styles = {
        info: {
            padding: '10px',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '5px',
            marginBottom: '10px',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '182px',
        },
        infoTwo: {
            padding: '10px',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '5px',
            marginBottom: '10px',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        infoTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '5px',
            color: '#333',
            border: 'none',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '0px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
        },
        materialsContainer: {
            display: 'flex',
            overflowX: 'auto',
            padding: '10px',
            gap: '10px',
            scrollBehavior: 'smooth',
        },
        materialCard: {
            flex: '0 0 auto',
            width: '300px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            alignItems: 'center',

        },
        arrowButton: {
            backgroundColor: 'white',
            border: 'solid 1px black',
            padding:'3px',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#333',
            borderRadius: '50%',
            textAlign:'center'
        },
        logo : {
            width: "290px",
            height: "160px"
        } ,
        hoverEffect: { border: '2px solid blue' },
        clickedEffect: { backgroundColor: "rgb(1, 1, 51)"},
    };

    const navigate = useNavigate();
    function goToCourse(){
        navigate('/course');
    }
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
    function Show(index,matIndex){
        console.log(JSON.stringify('selectedCourse'))
       
    }
    function navigateTo(url){
        window.location.replace(url);
    }
    function setHover(subject){
        setHoverSection(subject);
    }
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
        <div className="min-h-screen">
            {subjects.map((subject, index) => (
                <div
                    key={index}
                    style={{
                        ...(subject.id === "computer_science" ? styles.info : styles.infoTwo),
                        ...(hoverSection === subject.id && styles.hoverEffect),
                        ...(clickedSection === subject.id && styles.clickedEffect)
                      }}
                      id={subject.id}
                      onMouseEnter={() => setHoverSection(subject.id)}
                      onMouseLeave={() => setHoverSection('')}
                      onClick={() => setClickedSection(subject.id)}
                >
                    <p style={styles.infoTitle}>{subject.title}</p>
                    {materials[index] && materials[index].length > 0 && clickedSection === subject.id && (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button
                                style={styles.arrowButton}
                                onClick={() => scrollContainer(`materials-${index}`, 'left')}
                            >
                                &#8592;
                            </button>
                            <div
                                id={`materials-${index}`}
                                style={styles.materialsContainer}
                            >
                               {materials[index].map((material, matIndex) => (
                            <div
                                key={matIndex}
                                style={styles.materialCard}
                                onClick={() => {
                                    localStorage.setItem('selectedCourse', JSON.stringify(materials[index][matIndex]));
                                    navigate('/course');
                                }}
                            >
                                <img
                                    src={material.logo}
                                    alt={material.title}
                                    style={styles.logo}
                                />
                                <p>{material.title}</p>
                                <span className="text-sm text-gray-500">
                                {material.video && (
                                        <p>{videoDurations[`${index}-${matIndex}`] || 'Loading...'}</p>
                                    )}
                                {!material.video && (
                                    <p>Video does not exist</p>
                                )}
                                </span>
                            </div>
                        ))}

                            </div>
                            <button
                                style={styles.arrowButton}
                                onClick={() => scrollContainer(`materials-${index}`, 'right')}
                            >
                                &#8594;
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Resources;
