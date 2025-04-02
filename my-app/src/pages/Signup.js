import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: ""
  });
  const [isHovered, setIsHovered] = useState("");

  function validatePassword(password) {
    return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()]/.test(password);
  }

  const handleHover = (section) => {
    setIsHovered(isHovered === section ? "" : section);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      setUser((prevUser) => ({ ...prevUser, errorMessage: "Passwords do not match!" }));
      return;
    }
    if (!validatePassword(user.password)) {
      setUser((prevUser) => ({ ...prevUser, errorMessage: "Password does not meet security requirements!" }));
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      await updateProfile(userCredential.user, { displayName: user.name });
      alert("Signup successful! You can now log in.");
      navigate('/');
    } catch (error) {
      setUser((prevUser) => ({ ...prevUser, errorMessage: error.message }));
    }
  };

  const styles = {
    inputStyle: {
      marginBottom: "10px"
    },
    buttonStyle: {
      backgroundColor: "lightblue",
      color: "black",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      width: "290px",
      marginTop: "10px",
      borderRadius: "25px"
    },
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
      marginTop:"10%",
      backgroundColor:"white",

      
    },
    label: {
      display: "block",
      marginBottom: "10px",
      color: "#333"
    },
    inputStyle: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginBottom: "20px"
    },
    submit: {
      width: "100%",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    },
    buttonStyleHover: {
      backgroundColor: "darkblue",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      width: "290px",
      marginTop: "10px",
      borderRadius: "25px"
    },
    center:{
      alignItems:"center",
      backgroundColor:"white",
      padding:"10px",
      borderRadius:"0% 6% 6% 0%"
    },
    error: {
      color: "red",
      fontSize: "14px",
      marginBottom: "10px",
    }
  };

  const handleRestart = (e) => {
    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: ""
    });
  };

  return (
    <>
    <main className=" min-h-screen z-12">
    <h1 style={styles.title}>Sign Up</h1>
    {user.errorMessage && <p>{user.errorMessage}</p>}
    <form onSubmit={handleSubmit} style={styles.form} className="h-screen">
     <img src={require('../assets/logo.png')} alt="Logo" />
      <div
        style={styles.center}
      >
         {user.errorMessage && <p style={styles.error}>{user.errorMessage}</p>}
          <label style={styles.label}>
            <input
            style={styles.inputStyle}
              type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} required 
            />
          </label>
          <label style={styles.label}>
            <input
              style={styles.inputStyle}
              type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required
            />
          </label>
          <label style={styles.label}>
            <input
              style={styles.inputStyle}
              type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required
            />
          </label>
          <label style={styles.label}>
            <input
              style={styles.inputStyle}
              type="password" name="confirmPassword" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange} required
            />
            {/* Uncomment and adjust validation check */}
            {validatePassword(user.password) && <p>Password is valid</p>}
          </label>
          <button
            type="submit"
            style={isHovered === "submit" ? styles.buttonStyleHover : styles.buttonStyle}
            onMouseEnter={() => handleHover("submit")}
            onMouseLeave={() => handleHover("")}
          >
            Sign Up
          </button>
          <button
            type="reset"
            style={isHovered === "reset" ? styles.buttonStyleHover : styles.buttonStyle}
            onMouseEnter={() => handleHover("reset")}
            onMouseLeave={() => handleHover("")}
            onClick={() => handleRestart()}
          >
            Reset
          </button>
      </div>
      
    </form>
    </main>
  </>
  );
}

export default Signup;