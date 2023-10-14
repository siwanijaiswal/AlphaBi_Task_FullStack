import React from 'react';
import { logOut } from './firebase';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();
  const handleLogOut = async() => {
    logOut().then(() => {
      navigate("/")
      window.location.reload();
    }).catch(() => {
      alert('Something went wrong')
    })
  }
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <button 
        onClick={() => handleLogOut()}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
          Logout
        </button>
      </div>
    </footer>
  );
};
