import React, { useState } from 'react';
import "../assets/logo.png";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ishoverd, setIsHoverdown] = useState('');

    const handleHover = (section) => {
        setIsHoverdown(ishoverd === section? '' : section);
    };

    function verifyPassword(password) {
        if (password.length < 8) return false;
        if (!/[a-z]/.test(password)) return false;
        if (!/[A-Z]/.test(password)) return false;
        if (!/[0-9]/.test(password)) return false;
        if (!/[!@#$%^&*()]/.test(password)) return false;
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!verifyPassword(password)) {
            alert(
                "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
            );
        } else {
            alert(`Form submitted successfully! Username: ${username}`);
        }
    };


    const styles = {
        form: {
            display: 'flex',
            margin: '50px auto',
            padding: '20px',
            width: '400px',
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop:  '82px'
        },
        label: {
            display: 'block',
            marginBottom: '10px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
        },
        submit: {
            backgroundColor: "lightblue",
            color: "black",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "290px",
            marginTop: "10px",
            borderRadius: "25px",
        },
        hoverSubmit:{
            backgroundColor: "darkblue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "290px",
            marginTop: "10px",
            borderRadius: "25px",
        },
        textLable: {
            color: "gray",
            fontSize: "17px",
            marginTop: "5px",
            
        },
        forgotPassword: {
            color: 'blue',
            cursor: 'pointer',
            marginTop: '10px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        login: {
            marginTop: '10px',
            color: 'blue',
            cursor: 'pointer',
        },
        dispalyit: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
            color: 'blue',
            cursor: 'pointer',
        }
    };

    return (
        <>
        <div style={styles.dispalyit}>
        
        <form style={styles.form} onSubmit={handleSubmit}>
        <img src={require('../assets/logo.png')} alt="Logo" />
            <label style={styles.label}>
            <p style={styles.textLable}></p> 
                <input
                    style={styles.input}
                    type="text"
                    name="Email"
                    placeholder='Email..'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label style={styles.label}>
                <p style={styles.textLable}></p>
                <input
                    style={styles.input}
                    type="password"
                    name="password"
                    placeholder='Password..'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button style={ishoverd !== 'submit' ? styles.submit : styles.hoverSubmit} type="submit"
               onMouseEnter={() => handleHover("submit")}
               onMouseLeave={() => handleHover("")}
            >
                Submit
            </button>
            <br></br>
            <p style={styles.forgotPassword} >Forgot the password</p>
            <p style={styles.login}>Or don't have an account Login</p>
        </form>
        </div>
       
        </>
        
    );
}

export default Login;
