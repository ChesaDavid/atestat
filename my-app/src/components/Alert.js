import React from "react";

function Alert({ text = "This is your alert", type = "error" }) {
    const alertStyles = {
        padding: "16px",
        borderRadius: "8px",
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
    };

    const severityStyles = {
        loginSuccess: { color: "white", background: "green" },
        error: { color: "white", background: "red" },
        signupSuccess: { color: "white", background: "blue" },
    };

    // Get the correct style or default to a neutral gray
    const fullStyles = { 
        ...alertStyles, 
        ...(severityStyles[type] || { background: "gray", color: "white" }) 
    };

    return <div style={fullStyles}>{text}</div>;
}

export default Alert;
