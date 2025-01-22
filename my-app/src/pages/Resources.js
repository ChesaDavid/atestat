import React from 'react';

function Resources(){

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
        infoTitle:{
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
            "&:hover": {
                backgroundColor: '#ccc',
                color: 'white',
            },
        }

    }   
    const resources = [
        {
            title: "informatics",
            sources : [

            ]
        },
    ]
    const subjects = [
        { title: "Informatics", id: "informatics" },
        { title: "Computer Science", id: "computer_science"},
        { title: "Mathematics" , id: "mathematics"},
        { title: "Physics" , id:"physics"},
        { title: "Chemistry" ,id:"chemestry"},
        { title: "Biology" ,id:"biology" },
        { title: "English" ,id:"english" },
        { title: "Romanian" ,id:"romanian"},
        { title: "Geography" ,id:"geography" },
        { title: "History" ,id:"history" },
        { title: "Economics" ,id:"economics"},
        { title: "Literature" , id:"literature"},
        { title: "Sports" , id:"sports"},
        { title: "Business" ,id:"business"},
        { title: "Music" ,id:"music"},
    ];
   return (
        <div>
            {subjects.map((subject, index) => (
                <div
                    key={index}
                    style={subject.id === "informatics" ? styles.info : styles.infoTwo}
                    id={subject.id}
                >
                    <p style={styles.infoTitle}>{subject.title}</p>
                    {subject.id === "informatics" && (
                        <div id="informatics-Resources"></div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Resources;