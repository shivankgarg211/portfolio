import React from 'react'

function Hero() {
  return (
        <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Shivank Garg</h1>
        <p className="text-xl mt-4">MERN Stack Developer | Building Scalable Web Apps</p>
        <div className="mt-6">
          <a href="#contact" className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
            Contact Me
          </a>
          <a href="#projects" className="ml-4 border px-6 py-2 rounded border-white hover:bg-white hover:text-gray-900">
            My Projects
          </a>
        </div>
      </section>
  )
}

export default Hero
