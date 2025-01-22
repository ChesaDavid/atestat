import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import Logo from "../assets/logo.png";

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock authentication state

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
    };

    return (
        <nav>
            <img src={Logo} alt="Logo" id="logo-navbar" />
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
