import React from 'react';  // Ensure this line appears only once
import WelcomeMessage from './components/WelcomeMessage'; // Import statement for WelcomeMessage
import UserProfile from './components/UserProfile';       // Import statement for UserProfile
import Counter from './components/Counter';               // Import the Counter component

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <Counter />  {/* Include the Counter component */}
    </div>
  );
}

export default App;