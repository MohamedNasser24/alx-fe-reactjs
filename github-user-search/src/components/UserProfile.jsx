import React from 'react';

function UserProfile({ user }) {
  if (!user) return null;

  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      <p>{user.name || 'No name available'}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
}

export default UserProfile;

