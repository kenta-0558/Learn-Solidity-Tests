import React, { useEffect } from 'react';
import './App.css';

function App() {

    useEffect(() => {
        fetchGotchis();
    }, []);

    const fetchGotchis = () => {
        console.log("Kiichi");
    };

    return (
        <div>  
        </div>
    );
}

export default App;
