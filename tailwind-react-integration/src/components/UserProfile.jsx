import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src="/path/to/profile-image.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-xl text-blue-800 my-4 font-bold">
          John Doe
        </h1>
        <p className="text-base text-gray-600 mt-2 text-center">
          A short description about John Doe goes here. It provides a brief overview of the user.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;














