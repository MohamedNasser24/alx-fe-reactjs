import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component
import './index.css'; // Optional: Import your CSS file if you have one

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Use the App component */}
  </React.StrictMode>,
);
