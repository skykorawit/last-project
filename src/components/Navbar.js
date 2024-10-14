import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-green-500 to-green-700 p-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo3.png" alt="Logo" className="w-10 h-10 mr-2" /> {/* Logo */}
            <h1 className="text-white text-2xl font-bold tracking-wide transform transition-transform duration-300 hover:scale-105">
              Healthy Food
            </h1>
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:text-green-300 transition duration-300 ease-in-out"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i> {/* Hamburger Icon */}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-6">
            {['/', '/menu', '/cart', '/contact'].map((path, index) => {
              const titles = ['Home', 'Menu', 'Cart', 'Contact'];
              const icons = [
                'fas fa-home',
                'fas fa-utensils',
                'fas fa-shopping-cart',
                'fas fa-envelope',
              ];

              return (
                <Link
                  key={index}
                  to={path}
                  className="text-white text-lg flex items-center px-4 py-2 hover:bg-green-600 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <i className={`${icons[index]} mr-2`}></i> {/* Icons */}
                  {titles[index]}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col items-center bg-green-600 text-white text-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {['/', '/menu', '/cart', '/contact'].map((path, index) => {
            const titles = ['Home', 'Menu', 'Cart', 'Contact'];
            const icons = [
              'fas fa-home',
              'fas fa-utensils',
              'fas fa-shopping-cart',
              'fas fa-envelope',
            ];

            return (
              <Link
                key={index}
                to={path}
                className="w-full text-center py-3 hover:bg-green-500 transition duration-300 ease-in-out"
              >
                <i className={`${icons[index]} mr-2`}></i> {/* Icons */}
                {titles[index]}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Padding to prevent content overlap with the navbar */}
      <div className="pt-20">
        {/* Other components, such as Healthy Food section, go here */}
      </div>
    </>
  );
};

export default Navbar;
