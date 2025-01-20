import React from 'react'

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Advanced' },
    { name: 'Figma (UI/UX)', level: 'Intermediate' },
  ];
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600">{skill.name}</h3>
              <p className="text-gray-600 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
