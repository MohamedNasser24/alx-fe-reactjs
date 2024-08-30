import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Define the fetch function
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // Use useQuery with advanced options
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // Cache time in milliseconds (default: 5 minutes)
    cacheTime: 1000 * 60 * 10, // 10 minutes

    // Stale time in milliseconds (default: 0)
    staleTime: 1000 * 60 * 5, // 5 minutes

    // Refetch data on window focus (default: true)
    refetchOnWindowFocus: true,

    // Keep previous data while refetching (default: false)
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;