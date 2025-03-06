import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import Logo from "../assets/logo.png";
import SlideTabs from "./Slidetab";

function Navbar() {
    const [user, setUser] = useState(null);
    const [isHover, setIsHover] = useState(false);
    const [isSlideOpen, setIsSlideOpen] = useState(false); // Toggle for SlideTabs

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const styles = {
        searchBar: {
            width: "400px",
            marginLeft: "30px",
            borderRadius: "25px",
            padding: "5px",
            backgroundColor: "white",
            boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease-in-out",
        },
        logoundname: {
            color: "white",
            display: "flex",
            gap: "10px",
            alignItems: "center",
        },
        displayNameStyle: {
            fontSize: "20px",
            fontWeight: "bold",
        },
        logOutHover: {
            backgroundColor: "red",
            transition: "background-color 0.3s ease-in-out",
        },
    };

    return (
        <nav className="relative bg-gray-800 p-4 flex justify-between items-center text-white">
            <div style={styles.logoundname}>
                <img src={Logo} alt="Logo" id="logo-navbar" className="h-10" />
                {user && <p style={styles.displayNameStyle}>{user.displayName || "User"}</p>}
            </div>

            <input
                type="text"
                id="search"
                style={styles.searchBar}
                placeholder="Search..."
            />

            <ul className="flex gap-4 items-center">
                <li><Link to="/">Home</Link></li>
                {user && <li><Link to="/fav">Favorites</Link></li>}
                <li><Link to="/resources">Resources</Link></li>

                {/* Toggle SlideTabs */}
                <li>
                    <button
                        onClick={() => setIsSlideOpen((prev) => !prev)}
                        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Services
                    </button>
                </li>

                {user ? (
                    <li
                        id="LogOutButton"
                        onMouseOver={() => setIsHover(true)}
                        onMouseOut={() => setIsHover(false)}
                        style={isHover ? styles.logOutHover : {}}
                        onClick={handleLogout}
                    >
                        <span style={{ padding: "10px", display: "block", cursor: "pointer", color: "white", fontWeight: "bold", borderRadius: "5%" }}>
                            LogOut
                        </span>
                    </li>
                ) : (
                    <>
                        <li><Link to="/login">LogIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </>
                )}
            </ul>

            {/* SlideTabs Dropdown */}
            <AnimatePresence>
                {isSlideOpen && (
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-16 right-4 bg-white text-black rounded-lg shadow-lg z-10"
                    >
                        <SlideTabs />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
