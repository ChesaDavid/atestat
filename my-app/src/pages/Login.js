import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../assets/logo.png";
function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        errorMessage: ""
      });
      const [ishoverd, setIsHoverdown] = useState('');

    const handleHover = (section) => {
        setIsHoverdown(ishoverd === section? '' : section);
    };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, user.email, user.password);
          alert("Login successful!");
          window.location.replace('http://localhost:3001/')
        } catch (error) {
          setUser((prevUser) => ({ ...prevUser, errorMessage: error.message }));
        }
      };

    const styles = {
        form: {
            display: 'flex',
            margin: '50px auto',
            padding: '20px',
            width: '800px',
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop:  '12%'
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
        <div>
        <label style={styles.label}>
            <p style={styles.textLable}></p> 
                <input
                    style={styles.input}
                    type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required
                />
            </label>
            <label style={styles.label}>
                <p style={styles.textLable}></p>
                <input
                    style={styles.input}
                    type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required
                />
            </label>
            <button style={ishoverd !== 'submit' ? styles.submit : styles.hoverSubmit} type="submit"
               onMouseEnter={() => handleHover("submit")}
               onMouseLeave={() => handleHover("")}
               onClick={handleSubmit}
            >
                Submit
            </button>
            <br></br>
            <p style={styles.forgotPassword} >Forgot the password</p>
            <p style={styles.login}>Or don't have an account Login</p>
        </div>
        </form>
        </div>
       
        </>
        
    );
}

export default Login;
