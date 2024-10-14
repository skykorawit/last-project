import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // นำเข้า Font Awesome

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold tracking-wide flex items-center transform transition-transform duration-300 hover:scale-105">
          <img src="/logo3.png" alt="Logo" className="w-10 h-10 mr-2" /> {/* โลโก้ */}
          Healthy Food
        </h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none hover:text-green-300 transition duration-300 ease-in-out"
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>
        <div
          className={`md:flex md:items-center space-x-4 transition-all duration-500 ease-in-out ${
            isOpen ? 'block' : 'hidden'
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
                className="text-white text-lg flex items-center px-4 py-2 hover:bg-green-600 rounded transition duration-300 ease-in-out transform transition-transform duration-300 hover:scale-105"
              >
                <i className={`${icons[index]} mr-2`}></i> {/* ไอคอน */}
                {titles[index]}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
