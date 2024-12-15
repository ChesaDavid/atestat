import React from "react";
import Home from "../pages/Home";
import '../index.css';
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>    
            </ul>
        </nav>
    );
}

export default Navbar;