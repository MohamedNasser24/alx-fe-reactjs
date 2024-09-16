import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchUserData } from './githubService';

// Create a new instance of axios-mock-adapter
const mock = new MockAdapter(axios);

describe('fetchUserData', () => {
  afterEach(() => {
    mock.reset(); // Reset mock after each test
  });

  it('should fetch user data successfully', async () => {
    const mockUsername = 'octocat';
    const mockData = {
      login: 'octocat',
      id: 1,
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      html_url: 'https://github.com/octocat',
      name: 'The Octocat',
    };

    // Set up mock response
    mock.onGet(`https://api.github.com/users/${mockUsername}`).reply(200, mockData);

    // Call the function and verify response
    const result = await fetchUserData(mockUsername);
    expect(result).toEqual(mockData);
  });

  it('should handle 404 error', async () => {
    const mockUsername = 'nonexistentuser';

    // Set up mock response for 404
    mock.onGet(`https://api.github.com/users/${mockUsername}`).reply(404);

    // Verify that the function throws the expected error
    await expect(fetchUserData(mockUsername)).rejects.toThrow('User not found');
  });

  it('should handle other errors', async () => {
    const mockUsername = 'erroruser';

    // Set up mock response for a different error
    mock.onGet(`https://api.github.com/users/${mockUsername}`).networkError();

    // Verify that the function throws a generic error
    await expect(fetchUserData(mockUsername)).rejects.toThrow('Error fetching user data');
  });
});