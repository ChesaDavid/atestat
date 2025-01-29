import React from 'react';
import PhpLogo from "../assets/ComputerScience/PHP_Logo.png";
import JSLogo from "../assets/ComputerScience/JSimg.webp";
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
            width: '150px',
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
            width: "100px",
            height: "80px"
        }
    };

    const subjects = [
        { title: "Informatics", id: "informatics" },
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
        { title: "Literature", id: "literature" },
        { title: "Sports", id: "sports" },
        { title: "Business", id: "business" },
        { title: "Music", id: "music" },
    ];

    const materials = [
        [], // Informatics
        [
            {
                logo: PhpLogo,
                title: "PHP Course",
            },
            {
                logo: JSLogo,
                title: "JavaScript Course",
            },
        ], // Computer Science
        [], // Mathematics
    ];

    const scrollContainer = (id, direction) => {
        const container = document.getElementById(id);
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            {subjects.map((subject, index) => (
                <div
                    key={index}
                    style={subject.id === "informatics" ? styles.info : styles.infoTwo}
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
                                    <div key={matIndex} style={styles.materialCard}>
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
