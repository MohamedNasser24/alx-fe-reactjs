import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="flex flex-col items-center">
        <img
          src="/path/to/profile-image.jpg"
          alt="Profile"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover"
        />
        <h1 className="text-lg sm:text-lg md:text-xl font-bold mt-4">John Doe</h1>
        <p className="text-sm sm:text-sm md:text-base mt-2 text-center">
          A short description about John Doe goes here. It provides a brief overview of the user.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;








