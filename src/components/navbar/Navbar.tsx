import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-800 text-lg font-bold">
          <Link to="/">Nicolas TORRE</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-blue-800 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link
            to="/"
            className="block text-blue-800 hover:text-blue-600 p-2 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/cv/en"
            target="_blank"
            className="block text-blue-800 hover:text-blue-600 p-2 transition duration-300"
          >
            CV
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
