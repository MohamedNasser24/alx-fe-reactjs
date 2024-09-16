import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';
import { fetchUserData } from '../services/githubService';

// Mock the fetchUserData function
jest.mock('../services/githubService');

describe('Search Component', () => {
  it('should display error message when user is not found', async () => {
    fetchUserData.mockRejectedValue(new Error('User not found'));

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
      target: { value: 'nonexistentuser' },
    });

    fireEvent.click(screen.getByText(/search/i));

    await waitFor(() => {
      expect(screen.getByText("Looks like we can't find the user")).toBeInTheDocument();
    });
  });
});
