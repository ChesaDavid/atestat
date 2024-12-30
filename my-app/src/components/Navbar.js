import React from "react";
import Home from "../pages/Home";
import '../index.css';
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav>
            <img src={Logo} alt="Logo" id="logo-navbar"/>
            <ul>
                <li><Link to="/">Home</Link></li>    
                <li><Link to="login">LogIn</Link></li>
                <li><Link to="signup">SignUp</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;