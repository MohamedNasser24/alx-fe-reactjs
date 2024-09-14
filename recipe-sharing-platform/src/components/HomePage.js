import React from 'react';

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center py-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
      </header>
      <main className="container mx-auto mt-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Add Recipe Card Components Here */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
