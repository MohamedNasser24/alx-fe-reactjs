// src/components/Search.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Search from './Search';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('Search Component', () => {
    afterEach(() => {
        mock.reset(); // Reset mock after each test
    });

    it('calls the GitHub API and displays user data', async () => {
        // Arrange
        const mockUser = {
            login: 'octocat',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/octocat',
            name: 'The Octocat',
        };

        // Mock the API response
        mock.onGet('https://api.github.com/users/octocat').reply(200, mockUser);

        render(<Search />);

        // Act
        fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
            target: { value: 'octocat' },
        });
        fireEvent.click(screen.getByText(/search/i));

        // Assert
        await waitFor(() => expect(screen.getByText(/the octocat/i)).toBeInTheDocument());
        expect(screen.getByRole('img')).toHaveAttribute('src', mockUser.avatar_url);
        expect(screen.getByText(/view profile/i)).toHaveAttribute('href', mockUser.html_url);
    });

    it('handles user not found', async () => {
        // Arrange
        mock.onGet('https://api.github.com/users/nonexistentuser').reply(404);

        render(<Search />);

        // Act
        fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
            target: { value: 'nonexistentuser' },
        });
        fireEvent.click(screen.getByText(/search/i));

        // Assert
        await waitFor(() => expect(screen.getByText(/looks like we can't find the user/i)).toBeInTheDocument());
    });

    it('displays loading state while fetching', async () => {
        // Arrange
        mock.onGet('https://api.github.com/users/octocat').reply(200, {
            login: 'octocat',
        });

        render(<Search />);

        // Act
        fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
            target: { value: 'octocat' },
        });
        fireEvent.click(screen.getByText(/search/i));

        // Assert
        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
        await waitFor(() => expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument());
    });
});

