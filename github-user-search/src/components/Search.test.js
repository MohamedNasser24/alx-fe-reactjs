// src/components/Search.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';
import { fetchUserData } from '../services/githubService';
import { jest } from '@jest/globals';

// Mock the fetchUserData function
jest.mock('../services/githubService');

describe('Search Component', () => {
  it('should display user data when API call is successful', async () => {
    const mockData = {
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      html_url: 'https://github.com/octocat',
      name: 'The Octocat',
    };

    fetchUserData.mockResolvedValue(mockData);

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
      target: { value: 'octocat' },
    });

    fireEvent.click(screen.getByText(/search/i));

    await waitFor(() => {
      expect(screen.getByText('The Octocat')).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('src', mockData.avatar_url);
      expect(screen.getByRole('link')).toHaveAttribute('href', mockData.html_url);
    });
  });

  it('should display loading message while fetching data', async () => {
    fetchUserData.mockImplementation(() => new Promise(() => {})); // Simulate loading

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
      target: { value: 'octocat' },
    });

    fireEvent.click(screen.getByText(/search/i));

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

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

  it('should display generic error message on other errors', async () => {
    fetchUserData.mockRejectedValue(new Error('Error fetching user data'));

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
      target: { value: 'erroruser' },
    });

    fireEvent.click(screen.getByText(/search/i));

    await waitFor(() => {
      expect(screen.getByText('An error occurred while fetching user data')).toBeInTheDocument();
    });
  });
});
