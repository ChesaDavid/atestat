import React, { useState } from 'react';
import { displayName } from "../firebase";

function Calculator() {
    const [screen, setScreen] = useState('');
    const styles = {
        calc: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: 'lightgray',
            borderRadius: '10px',
            width: '50%',
            margin: '20px auto',
            marginTop: '210px',
        },
        screen: {
            gridColumn: 'span 4',
            height: '50px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            textAlign: 'right',
            padding: '10px',
            fontSize: '20px',
        },
        button: {
            height: '50px',
            fontSize: '20px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };
    console.log(displayName);
    function handleButtonClick(value) {
        if (value === 'AC') {
            setScreen('');
        } else if (value === '=') {
            try {
                setScreen(eval(screen).toString()); 
            } catch {
                setScreen('Error');
            }
        } else if (value === 'sqrt'){
            setScreen(Math.sqrt(parseFloat(screen)).toString());
        }else if(value==='^2'){
            setScreen(Math.pow(parseFloat(screen).toString(),2));
        }else if(value==='!'){
            const val = parseFloat(screen).toString();
            let factorial = 1;
            for(let i=2; i<=val; i++){
                factorial *= i;
            }
            setScreen(factorial.toString());
        }
        else {
            setScreen(screen + value);
        }
    }
    function handleKeyboardEvent(e){
        if(e.key.match(/[0-9\.]/)){
            handleButtonClick(e.key);
        }
        else if(e.key==='Backspace'){
            handleButtonClick('AC');
        }
        else if(e.key==='Enter'){
            handleButtonClick('=');
        }
        else if(e.key==='Delete'){
            handleButtonClick('AC');
        }
        else if(e.key==='/'){
            handleButtonClick('/');
        }
        else if(e.key==='*'){
            handleButtonClick('*');
        }
        else if(e.key==='+'){
            handleButtonClick('+');
        }
        else if(e.key==='-'){
            handleButtonClick('-');
        }
        else if(e.key==='^'){
            handleButtonClick('^2');
        }
        else if(e.key==='sqrt'){
            handleButtonClick('sqrt');
        }
    }
    return (
        <>
        <body>
        <div style={styles.calc} 
            onKeyDown={handleKeyboardEvent}>
            <div style={styles.screen}>{screen}</div>
            {['AC', 7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', '.', 0, '!', '/','sqrt','^2','='].map((value) => (
                <button
                    key={value}
                    style={styles.button}
                    onClick={() => handleButtonClick(value.toString())}
                >
                    {value}
                </button>
            ))}
        </div>
        </body>
        
        </>
        
    );
}

export default Calculator;
