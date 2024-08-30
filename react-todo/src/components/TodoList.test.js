import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList'; // Adjust the path as necessary

// Test initial rendering of the TodoList component
test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

// Test initial todos are rendered
test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo app/i)).toBeInTheDocument();
  expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
});

// Test adding a new todo
test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Enter a new todo/i), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

// Test toggling a todo's completion status
test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: none');
});

// Test deleting a todo
test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText(/Delete/i)[0]);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});