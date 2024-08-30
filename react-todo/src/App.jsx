import React from 'react'; // Import React once
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;