const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
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
      
  )
};

export default Nav;
