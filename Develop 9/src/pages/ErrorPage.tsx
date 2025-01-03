const ErrorPage = () => {
  import React from 'react';

  const ErrorPage: React.FC = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
          <p className="text-xl text-gray-700">Something went wrong.</p>
        </div>
      </div>
    );
  };

export default ErrorPage;
