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
        setHoverSection(hoverSection === section ? "" : section);
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <header className="bg-gradient-to-l from-blue-600 to-black py-32 text-center text-white">
                <h1 className="text-4xl font-bold">Welcome to StudyIt!</h1>
                <p className="mt-4 text-lg">Where everyone can become a master at anything.</p>
            </header>

            <main className="mx-auto max-w-4xl px-6 py-8">
                <section className="mb-10 border-b border-gray-300 pb-6">
                    <h2 
                        onClick={() => handleToggle("about")}
                        onMouseOver={() => handleHover("about")}
                        onMouseOut={() => handleHover("about")}
                        className={`cursor-pointer text-center text-xl font-semibold transition-all duration-300 
                            ${(visibleSection === "about" || hoverSection === "about") 
                            ? "rounded-lg bg-blue-600 p-3 text-white" 
                            : "text-white hover:text-blue-600"}`}
                    >
                        About Us
                    </h2>
                    <div className={`mt-4 ${visibleSection === "about" ? "block" : "hidden"}`}>
                        <p className="text-white">
                            This website is dedicated to students or pupils in need of a great tool to help them studying.
                            That's right "StudyIt", what is it... well everything that you could imagine.
                        </p>
                        <ul className="ml-6 mt-4 list-disc text-white">
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>UI/UX Design</li>
                        </ul>
                        <p className="mt-4 text-white">Or something else that may pique your interest.</p>
                    </div>
                </section>

                <section className="mb-10 border-b border-gray-300 pb-6">
                    <h2 
                        onClick={() => handleToggle("services")}
                        onMouseOver={() => handleHover("services")}
                        onMouseOut={() => handleHover("services")}
                        className={`cursor-pointer text-center text-xl font-semibold transition-all duration-300 
                            ${(visibleSection === "services" || hoverSection === "services") 
                            ? "rounded-lg bg-blue-600 p-3 text-white" 
                            : "text-white hover:text-blue-600"}`}
                    >
                        Apps
                    </h2>
                    <div className={`mt-4 ${visibleSection === "services" ? "block" : "hidden"}`}>
                        <p className="text-white">
                            We offer educational resources and services, everything just at a click's notice.
                            <br />
                            You can even try our <a href="#!" className="text-blue-600 hover:underline">mobile app</a>.
                        </p>
                    </div>
                </section>

                <section className="mb-10 border-b border-gray-300 pb-6">
                    <h2 
                        onClick={() => handleToggle("contact")}
                        onMouseOver={() => handleHover("contact")}
                        onMouseOut={() => handleHover("contact")}
                        className={`cursor-pointer text-center text-xl font-semibold transition-all duration-300 
                            ${(visibleSection === "contact" || hoverSection === "contact") 
                            ? "rounded-lg bg-blue-600 p-3 text-white" 
                            : "text-white hover:text-blue-600"}`}
                    >
                        Contact Us
                    </h2>
                    <div className={`mt-4 ${visibleSection === "contact" ? "block" : "hidden"}`}>
                        <p className="text-white">Email: david.chesa.it@gmail.com</p>
                        <p className="text-white">Phone: 0732409201</p>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 
                        onClick={() => handleToggle("freeServices")}
                        onMouseOver={() => handleHover("freeServices")}
                        onMouseOut={() => handleHover("freeServices")}
                        className={`cursor-pointer text-center text-xl font-semibold transition-all duration-300 
                            ${(visibleSection === "freeServices" || hoverSection === "freeServices") 
                            ? "rounded-lg bg-blue-600 p-3 text-white" 
                            : "text-white hover:text-blue-600"}`}
                    >
                        Services
                    </h2>
                    <div className={`mt-4 ${visibleSection === "freeServices" ? "block" : "hidden"}`}>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="calculator" className="transform transition-transform hover:scale-105">
                                <img src={Calculator} alt="Calculator" className="w-48 rounded-lg shadow-lg" />
                            </a>
                            <a href="contabil" className="transform transition-transform hover:scale-105">
                                <img src={Account} alt="Account" className="w-48 rounded-lg shadow-lg" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
