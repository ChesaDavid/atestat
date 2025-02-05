import React from 'react';
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
import { Link } from 'react-router-dom';


function Resources() {
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
            backgroundColor: 'transparent',
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
        }
    };

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
            { logo: PhpLogo, title: "PHP Course" },
            { logo: JSLogo, title: "JavaScript Course" },
            { logo: AndroidStudioLogo, title: "Android Studio Course" },
            { logo: CLogo, title: "C Course" },
            { logo: CPPLogo, title: "C++ Course" },
            { logo: FlutterLogo, title: "Flutter Course" },
            { logo: GitHubLogo, title: "GitHub Guide" },
            { logo: JavaLogo, title: "Java Course" },
            { logo: LuaLogo, title: "Lua Course" },
            { logo: NextLogo, title: "Next.js Course" },
            { logo: PythonLogo, title: "Python Course" },
            { logo: ReactLogo, title: "React Course" },
            { logo: TailwindLogo, title: "Tailwind CSS Guide" },
        ], 
        [], // Mathematics
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
    return (
        <div>
            {subjects.map((subject, index) => (
                <div
                    key={index}
                    style={subject.id === "computer_science" ? styles.info : styles.infoTwo}
                    id={subject.id}
                >
                    <p style={styles.infoTitle}>{subject.title}</p>
                    {materials[index] && materials[index].length > 0 && (
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
                                    <div key={matIndex} style={styles.materialCard}
                                        onClick={()=>{
                                            localStorage.setItem('selectedCourse',materials[index][matIndex]);
                                            navigateTo('http://localhost:3001/course')
                                        }}
                                    >
                                        <img
                                            src={material.logo}
                                            alt={material.title}
                                            style={styles.logo}
                                        />
                                        <p>{material.title}</p>
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
