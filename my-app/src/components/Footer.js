import React from 'react';

function Footer(){
    const styles = {
        footer: {
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
            position: 'fixed',
            bottom: '0',
            width: '100%',
        }
    };
    return (
        <div style={styles.footer}>
            <p>&copy; 2024 StudyIt. All rights reserved.</p>
        </div>
    );
}

export default Footer;