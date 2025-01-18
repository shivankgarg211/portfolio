import React from 'react'
import { Link } from "react-scroll";
function Navbar() {
  return (
        <nav className="bg-gray-800 p-4 text-white fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shivank Garg</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="home" smooth={true} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} className="cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} className="cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} className="cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} className="cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar
