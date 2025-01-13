import React, { useState } from 'react';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function verifyPassword(password) {
        if (password.length < 8) return false;
        if (!/[a-z]/.test(password)) return false;
        if (!/[A-Z]/.test(password)) return false;
        if (!/[0-9]/.test(password)) return false;
        if (!/[!@#$%^&*()]/.test(password)) return false;
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!verifyPassword(password)) {
            alert(
                "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
            );
        } else {
            alert(`Form submitted successfully! Username: ${username}`);
        }
    };

    const styles = {
        form: {
            margin: '50px auto',
            padding: '20px',
            width: '400px',
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '210px',
        },
        label: {
            display: 'block',
            marginBottom: '10px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
        },
        submit: {
            width: '100%',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>
                Username:
                <input
                    style={styles.input}
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label style={styles.label}>
                Password:
                <input
                    style={styles.input}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button style={styles.submit} type="submit">
                Submit
            </button>
        </form>
    );
}

export default Login;
