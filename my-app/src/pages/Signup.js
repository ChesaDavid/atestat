import React from "react";

function Signup(){
    const [ishoverd, setIsHoverdown] = useState(false);
    function validatePassword(password){
        // if (password.length < 8) return false;
        // if (!/[a-z]/.test(password)) return false;
        // if (!/[A-Z]/.test(password)) return false;
        // if (!/[0-9]/.test(password)) return false;
        // if (!/[!@#$%^&*()]/.test(password)) return false;
        // return true;
    }
    const user = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage: ""
    };
    const styles = {
        title:{

        },
        label:{
        },
        inputStyle:{
            marginBottom: "10px"
        },
        buttonStyle:{
            backgroundColor: ishoverd ? "darkblue" : "lightblue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "290px",
            marginTop: "10px",
            borderRadius: "25px",
            
            },
            form:{
                display: "flex",
                flexDirection: "column",
                marginTop: "210px",
                backgroundColor: "white",
                padding: "90px 40px",
                borderRadius: "100px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                alignItems: "center",
            }
    };
    function handleSubmit(event){

    }
   
    return (
        <>
            <h1 style={styles.title}>Sign Up</h1>
            {user.errorMessage && <p>{user.errorMessage}</p>}
            <form 
                onSubmit={handleSubmit}
                style={styles.form}
                >
                <label style={styles.label}>
                    Name:
                    <input
                        style={styles.inputStyle}
                        type="text"
                        value={user.name}
                        // onChange={(e) => setUser({...user, name: e.target.value })}
                    />
                </label>
                <label style={styles.label}>
                    Email:
                    <input
                        style={styles.inputStyle}
                        type="email"
                        value={user.email}
                        // onChange={(e) => setUser({...user, email: e.target.value })}
                    />
                </label>
                <label style={styles.label}>
                    Password:
                    <input
                        style={styles.inputStyle}
                        type="password"
                        value={user.password}
                        // onChange={(e) => setUser({...user, password: e.target.value })}
                    />
                </label>
                <label style={styles.label}>
                    Confirm Password:
                    <input
                        style={styles.inputStyle}  
                        type="password"
                        value={user.confirmPassword}
                        >
                            
                        </input>
                    {validatePassword() && (
                        <p>Password is valid</p>
                    )}
                </label>
                <button 
                    type="submit"
                    style={styles.buttonStyle}  
                    onMouseEnter={()=> setIsHoverdown(true)}  
                    >Sign Up</button>
                <button 
                    type="reset"
                    style={styles.buttonStyle}
                    onMouseEnter={()=> setIsHoverdown(true)} 
                    >Reset</button>
                </form>
        </>
    );
}

export default Signup;  