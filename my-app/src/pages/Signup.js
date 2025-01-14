import React, { useState } from "react";

function Signup() {
  // Creating state variables for user data
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: ""
  });

  const [isHovered, setIsHovered] = useState(""); // Renaming to 'isHovered' for clarity

  // Password validation logic (if required)
  function validatePassword(password) {
    // Uncomment and adjust validation logic as necessary
    if (password.length < 8) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[!@#$%^&*()]/.test(password)) return false;
    return true;
  }

  // Hover handling function
  const handleHover = (section) => {
    setIsHovered(isHovered === section ? "" : section);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
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
      margin: "50px auto",
      padding: "20px",
      width: "400px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginTop: "210px"
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
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., API call)
  };

  return (
    <>
      <h1 style={styles.title}>Sign Up</h1>
      {user.errorMessage && <p>{user.errorMessage}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            style={styles.inputStyle}
            type="text"
            name="name" // Adding name attribute to link to state
            value={user.name}
            onChange={handleChange} // Update state on change
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            style={styles.inputStyle}
            type="email"
            name="email" // Adding name attribute to link to state
            value={user.email}
            onChange={handleChange} // Update state on change
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            style={styles.inputStyle}
            type="password"
            name="password" // Adding name attribute to link to state
            value={user.password}
            onChange={handleChange} // Update state on change
          />
        </label>
        <label style={styles.label}>
          Confirm Password:
          <input
            style={styles.inputStyle}
            type="password"
            name="confirmPassword" // Adding name attribute to link to state
            value={user.confirmPassword}
            onChange={handleChange} // Update state on change
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
      </form>
    </>
  );
}

export default Signup;
