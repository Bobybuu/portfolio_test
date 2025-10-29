import React from 'react';
import ContactForm from './ContactForm';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I create beautiful, functional web applications using modern technologies 
            like React, TypeScript, Django, and AWS.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                I'm a passionate full-stack developer with expertise in building 
                scalable web applications. I love solving complex problems and 
                creating user-friendly interfaces.
              </p>
              <p className="text-lg text-gray-600">
                My tech stack includes React, TypeScript, Python, Django, Node.js, 
                and various cloud technologies including AWS.
              </p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Profile Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contact Me</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;