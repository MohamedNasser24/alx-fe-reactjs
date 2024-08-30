import React from 'react';
import TodoList from './components/TodoList';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;