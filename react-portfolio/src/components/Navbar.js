import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <h1 className="text-2xl font-bold">Shivank Garg</h1>

        {/* Right Side: Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="home" smooth={true} className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <Link to="about" smooth={true} className="cursor-pointer hover:text-gray-400">
            About
          </Link>
          <Link to="projects" smooth={true} className="cursor-pointer hover:text-gray-400">
            Projects
          </Link>
          <Link to="skills" smooth={true} className="cursor-pointer hover:text-gray-400">
            Skills
          </Link>
          <Link to="contact" smooth={true} className="cursor-pointer hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white focus:outline-none"
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="home"
                smooth={true}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-gray-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-gray-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                onClick={toggleMenu}
                className="cursor-pointer hover:text-gray-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
