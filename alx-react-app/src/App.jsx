import React, { useState } from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <WelcomeMessage />
            <div>
                <h1>Welcome to ALX React App!</h1>
                <p>The current count is {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    );
}
export default App;