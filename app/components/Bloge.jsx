import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import react from '../../public/react.webp';
import next from '../../public/next.webp';
import html from '../../public/html.webp';

// Example blog data
const blogPosts = [
  {
    id: 1,
    title: 'Mastering React: Tips and Tricks',
    description: 'Learn how to write better and optimized React code for modern web development.',
    image: react, // Replace with your image path
    date: 'December 15, 2024',
    link: '/blog/mastering-react',
  },
  {
    id: 2,
    title: 'Next.js Performance Optimization',
    description: 'Understand how to make your Next.js applications faster and more efficient.',
    image: next, // Replace with your image path
    date: 'December 10, 2024',
    link: '/blog/nextjs-performance',
  },
  {
    id: 3,
    title: 'CSS in JS: Pros and Cons',
    description: 'Exploring the benefits and drawbacks of using CSS-in-JS libraries in modern projects.',
    image: html, // Replace with your image path
    date: 'December 5, 2024',
    link: '/blog/css-in-js',
  },
];

const Blog = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800">Latest Blogs</h2>
          <p className="mt-4 text-gray-600">
            Discover my latest articles on web development, React, Next.js, and more.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.description}</p>
                <Link href={post.link}
                  className="text-blue-500 font-semibold hover:underline">Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
