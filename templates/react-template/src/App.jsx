import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [lastClickedAt, setLastClickedAt] = useState('not clicked yet');

    function handleIncrement() {
        setCount((prev) => prev + 1);
        setLastClickedAt(new Date().toLocaleTimeString());
    }

    return (
        <main className="container">
            <h1>React test is working</h1>
            <p>If you can click this button and see updates, rendering is fine.</p>
            <button type="button" onClick={handleIncrement}>Clicked {count} times</button>
            <p className="meta">Last clicked: {lastClickedAt}</p>
        </main>
    );
}

export default App