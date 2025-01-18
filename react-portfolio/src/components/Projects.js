import React from 'react'

function Projects() {
        const projects = [
                {
                  title: "MediFusion Platform",
                  description: "A hospital management system with online appointment booking.",
                  link: "#",
                },
                {
                  title: "E-commerce App",
                  description: "An e-commerce platform with payment integration.",
                  link: "#",
                },
                {
                  title: "Portfolio Website",
                  description: "A personal portfolio to showcase my projects and skills.",
                  link: "#",
                },
              ];
  return (
        <section id="projects" className="p-8 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-800">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-400 mt-4 block">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects
