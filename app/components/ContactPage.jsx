import React from 'react';
import Container from '../layer/Container';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-scroll flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="w-full text-gray-800 py-20 text-center">
        <h1 className="text-5xl font-bold">Contact Me</h1>
        <p className="mt-4 text-lg">
          I'm available for freelance work or collaboration. Feel free to reach out!
        </p>
      </div>

      <Container>
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-10 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="flex flex-col justify-center items-start bg-white shadow-lg rounded-lg p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8">
              Reach out for collaborations, freelance inquiries, or to just say hello!
            </p>

            {/* Address */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800">Address:</h3>
              <p className="text-gray-600">
                 Dhanmondi, Dhaka Bangladesh.
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800">Phone:</h3>
              <a
                href="tel:+8801729628402"
                className="text-blue-500 hover:underline text-lg"
              >
                +88 01729628402
              </a>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
              <a
                href="mailto:abdulkadir112k@gmail.com"
                className="text-blue-500 hover:underline text-lg"
              >
                abdulkadir112k@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/md-abdul-kadir-9079642b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
