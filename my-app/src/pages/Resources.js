import React, { useState,useEffect } from 'react';
import PhpLogo from "../assets/ComputerScience/PHP_Logo.png";
import JSLogo from "../assets/ComputerScience/JSimg.webp";
import AndroidStudioLogo from "../assets/ComputerScience/android-studio.png";
import CLogo from "../assets/ComputerScience/c.png";
import CPPLogo from "../assets/ComputerScience/cpp.png";
import FlutterLogo from "../assets/ComputerScience/flutter.png";
import GitHubLogo from "../assets/ComputerScience/github.png";
import JavaLogo from "../assets/ComputerScience/java-logo.png";
import LuaLogo from "../assets/ComputerScience/lua.png";
import NextLogo from "../assets/ComputerScience/next.png";
import PythonLogo from "../assets/ComputerScience/python.png";
import ReactLogo from "../assets/ComputerScience/react.png";
import TailwindLogo from "../assets/ComputerScience/tailwind.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { displayName } from "../firebase";
import DerivativesLogo from "../assets/Mathematics/WhatAreDerivatives.png";
import Integrals from "../assets/Mathematics/integrals.png";
import Limits from "../assets/Mathematics/limits.png";
import AndroidStudioVideo from "../assets/ComputerScience/AndroidDevelopmentforBeginners-FullCourse.mp4"
import CProgramingVideo from "../assets/ComputerScience/CProgrammingTutorialforBeginners.mp4";
import PhpProgramingVideo from "../assets/ComputerScience/phpProgramingVideo.mp4";
import CppProgramingVideo from "../assets/ComputerScience/cppProgramingVideo.mp4";
import FlutterProgramingVideo from "../assets/ComputerScience/flutterProgramingVideo.mp4";
import githubVideo from "../assets/ComputerScience/githubVideo.mp4";
import javascriptProgramingVideo from "../assets/ComputerScience/javascriptProgramingVideo.mp4";
import javaVideo from "../assets/ComputerScience/javaVideo.mp4";
import luaVideo from "../assets/ComputerScience/luaVideo.mp4";
import { video } from 'framer-motion/client';




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

    const materials = [
        [ // Computer Science
            { 
                logo: PhpLogo, 
                title: "PHP Course", 
                description: "Learn PHP, one of the most popular server-side scripting languages for web development.",
                video:PhpProgramingVideo
            },
            { 
                logo: JSLogo, 
                title: "JavaScript Course", 
                description: "Master JavaScript, the language that powers dynamic and interactive web pages."
            },
            { 
                logo: AndroidStudioLogo, 
                title: "Android Studio Course", 
                description: "Get started with Android development using Android Studio and build native Android apps.",
                video: AndroidStudioVideo
            },
            { 
                logo: CLogo, 
                title: "C Course", 
                description: "Understand the fundamentals of C programming, a powerful language for system-level programming.",
                video: CProgramingVideo
            },
            { 
                logo: CPPLogo, 
                title: "C++ Course", 
                description: "Dive deeper into C++ programming, covering object-oriented programming and more.",
                video: CppProgramingVideo
            },
            { 
                logo: FlutterLogo, 
                title: "Flutter Course", 
                description: "Build beautiful cross-platform mobile applications with Flutter, Google's UI toolkit.",
                video: FlutterProgramingVideo
            },
            { 
                logo: GitHubLogo, 
                title: "GitHub Guide", 
                description: "Learn how to use GitHub for version control, collaboration, and open-source projects.",
                video: githubVideo
            },
            { 
                logo: JavaLogo, 
                title: "Java Course", 
                description: "Master Java, one of the most popular and versatile programming languages in the world.",
                video: javaVideo
            },
            { 
                logo: LuaLogo, 
                title: "Lua Course", 
                description: "Learn Lua, a lightweight scripting language often used in game development and embedded systems.",
                video: luaVideo
            },
            { 
                logo: NextLogo, 
                title: "Next.js Course", 
                description: "Explore the Next.js framework for building fast, SEO-friendly React applications."
            },
            { 
                logo: PythonLogo, 
                title: "Python Course", 
                description: "Master Python, one of the most versatile and widely used programming languages for data science and web development."
            },
            { 
                logo: ReactLogo, 
                title: "React Course", 
                description: "Learn React, the popular JavaScript library for building interactive user interfaces."
            },
            { 
                logo: TailwindLogo, 
                title: "Tailwind CSS Guide", 
                description: "Master Tailwind CSS, a utility-first CSS framework that makes web design faster and more efficient."
            },
        ], 
        [// Mathematics
            {
                logo:DerivativesLogo,
                title:"Derivatives subject summary",
                description: "Derivatives form the foundation of calculus and measure the rate of change of a function with respect to its variables. In simple terms, a derivative gives the slope of a function at any given point. It's widely used in physics, economics, biology, and more to analyze how variables change over time or with respect to other variables. Topics covered under derivatives include differentiation rules (product rule, quotient rule, chain rule), higher-order derivatives, and applications like optimization problems and motion analysis."
            },
            {
                logo:Integrals,
                title:"Integrals summarize",
                description:"Integrals are the reverse process of derivatives and allow us to calculate areas under curves, total accumulated quantities, and solve problems involving accumulation or summation. It has two main types: definite integrals (with specific limits) and indefinite integrals (general antiderivatives). Integrals are critical in computing areas, volumes, work, and even in probability and statistics. Key techniques include integration by parts, substitution, and numerical methods like Simpson's Rule."
            },
            {
                logo: Limits,
                title: "Limits from Zero to Hero",
            }
        ], 
        [//Phisics

        ],
        [//Chemistry

        ],
        [//Biology

        ],
        [//English

        ],
        [//Romanian

        ],
        [//History

        ],
        [//Economics

        ],
        [

        ]
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
        <div className="h-screen">
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
