import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-3xl mx-auto flex space-x-4">
        <Link 
          to="/" 
          className={`text-white px-3 py-2 rounded-md ${
            location.pathname === '/' ? 'bg-gray-900' : 'hover:bg-gray-700'
          }`}
        >
          Search
        </Link>
        <Link 
          to="/saved" 
          className={`text-white px-3 py-2 rounded-md ${
            location.pathname === '/saved' ? 'bg-gray-900' : 'hover:bg-gray-700'
          }`}
        >
          Saved Candidates
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
