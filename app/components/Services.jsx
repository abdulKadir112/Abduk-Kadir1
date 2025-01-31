import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCode, FaRocket, FaSearch } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites using React and Next.js.',
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
  },
  {
    title: 'Mobile-Friendly Design',
    description: 'Creating pixel-perfect, mobile-first designs for a seamless user experience.',
    icon: <FaMobileAlt className="text-4xl text-blue-500" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing visually appealing and user-friendly interfaces with a focus on usability.',
    icon: <FaPaintBrush className="text-4xl text-blue-500" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Improving website speed and ensuring smooth interactions with optimized code.',
    icon: <FaRocket className="text-4xl text-blue-500" />,
  },
  {
    title: 'SEO-Friendly Development',
    description: 'Implementing SEO best practices to boost your website’s visibility and traffic.',
    icon: <FaSearch className="text-4xl text-blue-500" />,
  },
  {
    title: 'Custom Component Design',
    description: 'Creating reusable, scalable, and maintainable React components for your projects.',
    icon: <FaCode className="text-4xl text-blue-500" />,
  },
];

const Services = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-gray-800">My Services</h2>
          <p className="mt-4 text-gray-600">
            I offer high-quality web development and design services to help businesses grow online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
