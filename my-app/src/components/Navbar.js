import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import Logo from "../assets/logo.png";
import { displayName } from "../firebase";
function Navbar() {
    const isAuthenticated = (displayName === null) ? false : true; // Mock authentication state

    const styles = {
        searchBar: {
            width: "400px",
            marginLeft: "30px",
            borderRadius: "25px",
            padding: "5px",
            backgroundColor: "white",
            boxShadow: "1 1 5px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            },
        },
        logoundname:{
            color: "white",
            display:"flex",
            gap:"10px",
            alignItems: "center"
        },
        displayNameStyle:{
            fontSize: "20px",
            fontWeight: "bold"
        }
    };
    console.log(displayName)
    return (
        <nav>
            <div style={styles.logoundname}>
                <img src={Logo} alt="Logo" id="logo-navbar" />
                {isAuthenticated && <p style={styles.displayNameStyle}>{displayName}</p>}
            </div>
            
            <input
                type="text"
                id="search"
                style={styles.searchBar}
                placeholder="Search..."
            />
            <ul>
                <li><Link to="/">Home</Link></li>
                {isAuthenticated && <li><Link to="/fav">Favorites</Link></li>}
                <li><Link to="/resources">Resources</Link></li>
                {isAuthenticated && <li><Link to="/logout">LogOut</Link></li>}
                {!isAuthenticated && <li><Link to="/login">LogIn</Link></li>}
                {!isAuthenticated && <li><Link to="/signup">SignUp</Link></li>}
                
            </ul>
        </nav>
    );
}

export default Navbar;
