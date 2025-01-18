import React from 'react'

function Contact() {
  return (
        <section id="contact" className="p-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 mb-4 border rounded"
            ></textarea>
            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>
  )
}

export default Contact
