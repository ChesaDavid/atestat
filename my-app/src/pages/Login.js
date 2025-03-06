import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import { displayName } from "../firebase";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        errorMessage: "",
    });
    console.log(displayName);
    const [isHovered, setIsHovered] = useState(false);
    const [alertStyle, setAlertStyle] = useState("none"); // State to manage alert type

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, user.email, user.password);
            setAlertStyle("loginSuccess");
            setTimeout(() => {
                navigate("/");
              }, 2000);
            
        } catch (error) {
            setAlertStyle("error");
            resetInputs();
            setUser((prevUser) => ({ ...prevUser, errorMessage: error.message }));
        }
    };
    function resetInputs(){
       setUser({
        email: "",
        password: "",
        errorMessage: "",
       })
    }
    const styles = {
        form: {
            display: "flex",
            margin: "50px auto",
            padding: "20px",
            width: "800px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "12%",
        },
        label: {
            display: "block",
            marginBottom: "10px",
            color: "#333",
        },
        input: {
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px",
        },
        submit: {
            backgroundColor: "lightblue",
            color: "black",
            padding: "10px 20px",
            borderRadius: "25px",
            cursor: "pointer",
            width: "290px",
            marginTop: "10px",
            border: "none",
        },
        hoverSubmit: {
            backgroundColor: "darkblue",
            color: "white",
        },
        forgotPassword: {
            color: "blue",
            cursor: "pointer",
            marginTop: "10px",
            textAlign: "center",
        },
        login: {
            marginTop: "10px",
            color: "blue",
            cursor: "pointer",
            textAlign: "center",
        },
        displayCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
        },
    };

    return (
        <>
            <div style={styles.displayCenter} className="h-screen">
                <form style={styles.form} onSubmit={handleSubmit}>
                    <img src={require("../assets/logo.png")} alt="Logo" />
                    <div>
                        <label style={styles.label}>
                            <input
                                style={styles.input}
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label style={styles.label}>
                            <input
                                style={styles.input}
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button
                            style={{ ...styles.submit, ...(isHovered ? styles.hoverSubmit : {}) }}
                            type="submit"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                        >
                            Submit
                        </button>
                        <p style={styles.forgotPassword}>Forgot the password</p>
                        <p style={styles.login}>Or don't have an account? Sign Up</p>
                    </div>
                </form>
            </div>

            {/* Conditional Alert Display */}
            {alertStyle !== "none" && (
                <Alert
                    text={alertStyle === "error" ? "Incorrect password or email" : "Login Successful!"}
                    type={alertStyle}
                />
            )}
        </>
    );
}

export default Login;
