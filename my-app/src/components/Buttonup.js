import React, { useState, useEffect } from "react";

function Buttonup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHover,setIsHover] = useState(false);

    const handleHover= () => {
        setIsHover(true);
    };
    const handleOutHover = () => {
        setIsHover(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const styles = {
        buttonUp: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: isHover ? "black" : "darkBlue",
            color: "#fff",
            padding: "20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginBottom: "50px",
            display: isVisible ? "block" : "none", 
            borderRadius: "50px",
            fontSize: "20px",
            fontWeight: "bold",
            zIndex: "999",
        },
    };

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={styles.buttonUp}
            onMouseEnter={handleHover}
            onMouseLeave={handleOutHover}
        >
            Back to Top
        </button>
    );
}

export default Buttonup;
