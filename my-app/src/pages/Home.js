import React, { useState } from "react";
import Calculator from "../assets/calculator.png";
import { displayName } from "../firebase";
import Account from "../assets/accountLogo.jpg";

function Home() {
    const [visibleSection, setVisibleSection] = useState(""); 
    const [hoverSection, setHoverSection] = useState(""); 
    const handleToggle = (section) => {
        setVisibleSection(visibleSection === section ? "" : section); 
    };

    const handleHover = (section) => {
        setHoverSection(hoverSection === section? "" : section);
    };
    console.log(displayName);
    return (
        <> 

            <header style={styles.header}>
                <h1 style={styles.title}>Welcome to StudyIt!</h1>
                <p style={styles.subtitle}>Where everyone can become a master at anything.</p>
            </header>
            <main style={styles.main} className="min-h-screen">
                {/* About Us */}
                <section style={styles.section}>
                    <h2 onClick={() => handleToggle("about")}
                        style={visibleSection === "about" || hoverSection === "about" ? styles.hover : styles.clickable}
                        onMouseOver={() => handleHover("about")}
                        onMouseOut={() => handleHover("about")}
                        >
                        About Us
                    </h2>
                    <p style={visibleSection === "about" ? styles.visible : styles.press}>
                        This website is dedicated to students or pupils in need of a great tool to help them studying.
                        That's right "StudyIt", what is it... well everything that you could imagine.
                        <ul>
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>UI/UX Design</li>
                        </ul>
                        Or something else that may pique your interest.
                    </p>
                </section>
                {/* Our Services */}
                <section style={styles.section}>
                    <h2 onClick={() => handleToggle("services")}
                        style={visibleSection === "services" || hoverSection === "services" ? styles.hover : styles.clickable}
                        onMouseOver={() => handleHover("services")}
                        onMouseOut={() => handleHover("services")}
                        >
                       Apps
                    </h2>
                    <p style={visibleSection === "services" ? styles.visible : styles.press}>
                        We offer educational resources and services, everything just at a click's notice.
                        <br />
                        You can even try our <a href="#!">mobile app</a>.
                    </p>
                </section>
                {/* Contact Us */}
                <section style={styles.section}>
                    <h2  onClick={() => handleToggle("contact")}
                        style={visibleSection === "contact" || hoverSection === "contact" ? styles.hover : styles.clickable}
                        onMouseOver={() => handleHover("contact")}
                        onMouseOut={() => handleHover("contact")}
                    >
                        Contact Us
                    </h2>
                    <p style={visibleSection === "contact" ? styles.visible : styles.press}>
                        <p>Email: david.chesa.it@gmail.com</p>
                        <p>Phone: 0732409201</p>
                    </p>
                </section>
                {/* Free services */}
                <section >
                    <h2 onClick={() => handleToggle("freeServices")}
                        style={visibleSection === "freeServices" || hoverSection === "freeServices" ? styles.hover : styles.clickable}
                        onMouseOver={() => handleHover("freeServices")}
                        onMouseOut={() => handleHover("freeServices")}
                        >Services</h2>
                    <p style={visibleSection==="freeServices" ? styles.visible : styles.press}>
                    <div className="flex gap-3">
                        <a href="calculator"><img src={Calculator} alt="Calculator" style={{ width: "200px", margin: "0 auto" }} /></a>
                        <a href="contabil"><img src={Account} alt="Account" style={{width: "200px", margin: "0 auto"}}/></a>
                    </div>
                    </p>
                </section>
                
            </main>
        </>
    );
}

const styles = {
    body: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        margin: 0,
        padding: 0,
        background: "#f1f1f1",
    },
    header: {
        background: "linear-gradient(to left, blue, black)",
        padding: "20px",
        textAlign: "center",
        color: "white",
        padding: "120px",
    },
    title: {
        margin: "0",
    },
    subtitle: {
        margin: "10px 0 0",
        fontSize: "18px",
    },
    main: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
    },
    section: {
        marginBottom: "40px",
        borderBottom: "1px solid #ccc",
        paddingBottom: "20px",
    },
    footer: {
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        marginTop: "20px",
        marginBottom: "0",
        position: "fixed",
        bottom: "0",
        width: "100%",
    },
    clickable: {
        cursor: "pointer",
        color: "white",
        textDecoration: "none",
        textAlign: "center",
    },
    press: {
        display: "none",
    },
    visible: {
        display: "block",
        marginTop: "10px",
        lineHeight: "1.6",
        color: "white",
    },
    hover:{
        backgroundColor: "blue",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.9s",
        textAlign: "center",
        padding: "10px",
        marginTop: "10px",
        lineHeight: "1.6",
        color: "white",
        borderRadius: "20px",
    }
};

export default Home;
